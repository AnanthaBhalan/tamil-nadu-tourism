import express from 'express';
import Destination from '../models/Destination.js';

const router = express.Router();

const calcScore = (place) =>
  (place.popularityScore / 100) * 0.5 + (place.rating / 5) * 0.5;

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

    // Get ALL places for the city (NO interest filter)
    const docs = await Destination.find({ city });
    console.log('📊 Found documents for city:', docs.length);

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
      .map(d => ({ ...d.toObject(), score: calcScore(d) }))
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
