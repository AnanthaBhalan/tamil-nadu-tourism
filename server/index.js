import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { locations, categories, districts ,foodPlaces} from './data/seedData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.get('/api/locations', (req, res) => {
  res.json(locations);
});

app.get('/api/locations/:id', (req, res) => {
  const location = locations.find(loc => loc.id === req.params.id);
  if (!location) return res.status(404).json({ message: 'Location not found' });
  res.json(location);
});

app.get('/api/categories', (req, res) => {
  res.json(categories);
});

app.get('/api/districts', (req, res) => {
  res.json(districts);
});
app.get('/api/food/:district', (req, res) => {
  const district = req.params.district;
  res.json(foodPlaces[district] || []);
});

// Build a restaurants index from seedData.foodPlaces for simple API
const buildRestaurants = () => {
  const restaurants = [];
  for (const district of Object.keys(foodPlaces)) {
    const list = foodPlaces[district] || [];
    for (const r of list) {
      restaurants.push({
        id: r.id,
        name: r.name,
        cuisine: Array.isArray(r.cuisine) ? r.cuisine : (r.cuisine ? [r.cuisine] : []),
        address: r.area || district,
        location: { type: 'Point', coordinates: [0, 0] },
        opening_hours: {
          monday: [{ open: '09:00', close: '21:00', isClosed: false }],
          tuesday: [{ open: '09:00', close: '21:00', isClosed: false }],
          wednesday: [{ open: '09:00', close: '21:00', isClosed: false }],
          thursday: [{ open: '09:00', close: '21:00', isClosed: false }],
          friday: [{ open: '09:00', close: '21:00', isClosed: false }],
          saturday: [{ open: '09:00', close: '21:00', isClosed: false }],
          sunday: [{ open: '09:00', close: '21:00', isClosed: false }],
        },
        contact: { phone: r.phone || '', email: r.email || '' },
        rating: r.rating || 4.0,
        price_range: r.price_range || '',
        images: r.image ? [r.image] : (r.images || []),
        reviews: r.reviews || []
      });
    }
  }
  return restaurants;
};

let restaurantsIndex = buildRestaurants();

app.get('/api/restaurants', (req, res) => {
  res.json(restaurantsIndex);
});

app.get('/api/restaurants/cuisines/list', (req, res) => {
  const set = new Set();
  for (const r of restaurantsIndex) {
    for (const c of r.cuisine) set.add(c);
  }
  res.json(Array.from(set));
});

app.get('/api/restaurants/:id', (req, res) => {
  const id = req.params.id;
  const found = restaurantsIndex.find(r => String(r.id) === String(id));
  if (!found) return res.status(404).json({ message: 'Restaurant not found' });
  res.json(found);
});

app.post('/api/restaurants/:id/reviews', (req, res) => {
  const id = req.params.id;
  const found = restaurantsIndex.find(r => String(r.id) === String(id));
  if (!found) return res.status(404).json({ message: 'Restaurant not found' });
  const review = req.body;
  if (!found.reviews) found.reviews = [];
  found.reviews.push({
    id: Date.now(),
    user_id: review.user_id || 'anonymous',
    user_name: review.user_name || 'Anonymous',
    rating: review.rating || 5,
    comment: review.comment || '',
    images: review.images || [],
    created_at: new Date().toISOString()
  });
  // Recompute average rating
  const total = found.reviews.reduce((s, r) => s + (r.rating || 0), 0);
  found.rating = Number((total / found.reviews.length).toFixed(1));
  res.status(201).json({ message: 'Review added' });
});

// Admin route to add new location (no auth for demo)
app.post('/api/admin/locations', (req, res) => {
  const newLocation = {
    id: Date.now().toString(),
    ...req.body,
    createdAt: new Date().toISOString()
  };
  locations.push(newLocation);
  res.status(201).json(newLocation);
});

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, '../dist')));
  app.get('*', (req, res) => {
    res.sendFile(join(__dirname, '../dist/index.html'));
  });
}

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
