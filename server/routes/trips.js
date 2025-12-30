import express from 'express';
import Destination from '../models/Destination.js';

const router = express.Router();

const calcScore = (place) =>
  (place.popularityScore / 100) * 0.5 + (place.rating / 5) * 0.5;

// Fallback data for when MongoDB is not available
const getFallbackData = (city) => {
  const fallbackData = {
    'Thanjavur': [
      {
        _id: 'fallback1',
        name: 'Brihadeeswarar Temple',
        entryFee: 50,
        visitDurationHours: 2,
        rating: 4.8,
        latitude: 10.787,
        longitude: 79.139,
        popularityScore: 90
      },
      {
        _id: 'fallback2',
        name: 'Thanjavur Palace',
        entryFee: 50,
        visitDurationHours: 1.5,
        rating: 4.4,
        latitude: 10.783,
        longitude: 79.136,
        popularityScore: 80
      },
      {
        _id: 'fallback3',
        name: 'Saraswathi Mahal Library',
        entryFee: 10,
        visitDurationHours: 1,
        rating: 4.3,
        latitude: 10.785,
        longitude: 79.1378,
        popularityScore: 70
      }
    ],
    'Chennai': [
      {
        _id: 'fallback4',
        name: 'Marina Beach',
        entryFee: 0,
        visitDurationHours: 2,
        rating: 4.5,
        latitude: 13.0544,
        longitude: 80.2837,
        popularityScore: 95
      },
      {
        _id: 'fallback5',
        name: 'Fort St. George',
        entryFee: 200,
        visitDurationHours: 1.5,
        rating: 4.3,
        latitude: 13.0827,
        longitude: 80.2707,
        popularityScore: 85
      }
    ],
    'Madurai': [
      {
        _id: 'fallback6',
        name: 'Meenakshi Amman Temple',
        entryFee: 0,
        visitDurationHours: 2,
        rating: 4.8,
        latitude: 9.919,
        longitude: 78.1195,
        popularityScore: 95
      },
      {
        _id: 'fallback7',
        name: 'Thirumalai Nayak Palace',
        entryFee: 50,
        visitDurationHours: 1,
        rating: 4.4,
        latitude: 9.9189,
        longitude: 78.1234,
        popularityScore: 80
      }
    ]
  };
  
  return fallbackData[city] || [];
};

// ⬇️ Updated: cap at 2 places per day
const splitIntoDays = (places, days) => {
  const MAX_PER_DAY = 2;
  const result = Array.from({ length: days }, () => []);

  for (const place of places) {
    // find first day that still has capacity
    const targetDay = result.find(dayArr => dayArr.length < MAX_PER_DAY);
    if (!targetDay) break; // all days are already full (2 places each)

    targetDay.push(place);
  }

  return result;
};

router.post('/plan', async (req, res) => {
  try {
    const { city, tripLength } = req.body;

    console.log('🔍 City:', city);
    console.log('🔍 Trip Length:', tripLength);

    // Get ALL places for city (NO interest filter)
    let docs;
    try {
      docs = await Destination.find({ city });
      console.log('📊 Found documents for city:', docs.length);
    } catch (dbError) {
      console.error('❌ Database error, using fallback data:', dbError.message);
      // Fallback data for when MongoDB is not available
      docs = getFallbackData(city);
      console.log('📊 Using fallback data:', docs.length);
    }

    if (docs.length === 0) {
      return res.json({
        success: true,
        itinerary: {
          city,
          tripLength,
          days: [],
          totalCost: 0
        }
      });
    }

    // Sort by score
    let sorted = docs
      .map(d => ({ 
        ...d.toObject ? d.toObject() : d, 
        score: calcScore(d) 
      }))
      .sort((a, b) => b.score - a.score);

    console.log('📈 Sorted by score:', sorted.map(p => p.name));

    // Split into days with max 2 places per day
    const groups = splitIntoDays(sorted, tripLength);
    console.log('📅 Groups per day:', groups.map(g => g.length));

    const days = groups.map((group, idx) => {
      const totalCost = group.reduce((s, p) => s + (p.entryFee || 0), 0);
      const totalTime = group.reduce(
        (s, p) => s + (p.visitDurationHours || 1),
        0
      );
      return {
        dayNumber: idx + 1,
        stops: group.map((p, i) => ({
          placeId: p._id,
          placeName: p.name,
          order: i + 1,
          visitDuration: p.visitDurationHours || 1,
          cost: p.entryFee || 0,
          coordinates: { latitude: p.latitude, longitude: p.longitude }
        })),
        totalCost,
        totalTime
      };
    });

    const totalCost = days.reduce((s, d) => s + d.totalCost, 0);

    console.log('✨ Final response ready - Total cost:', totalCost);

    res.json({
      success: true,
      itinerary: {
        city,
        tripLength,
        days,
        totalCost
      }
    });
  } catch (err) {
    console.error('❌ Error:', err);
    res.status(500).json({ success: false, error: err.message });
  }
});

export default router;
