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
