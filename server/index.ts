import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { locations, categories, districts } from './data/seedData';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../dist')));

// API Routes
app.get('/api/locations', (req, res) => {
  const { district, category, search } = req.query;
  
  let filteredLocations = [...locations];
  
  if (district) {
    filteredLocations = filteredLocations.filter(
      loc => loc.district.toLowerCase() === district.toString().toLowerCase()
    );
  }
  
  if (category) {
    filteredLocations = filteredLocations.filter(
      loc => loc.category.toLowerCase() === category.toString().toLowerCase()
    );
  }
  
  if (search) {
    const searchTerm = search.toString().toLowerCase();
    filteredLocations = filteredLocations.filter(
      loc => 
        loc.name.toLowerCase().includes(searchTerm) ||
        loc.description.toLowerCase().includes(searchTerm) ||
        loc.locality.toLowerCase().includes(searchTerm)
    );
  }
  
  res.json(filteredLocations);
});

app.get('/api/locations/:id', (req, res) => {
  const location = locations.find(loc => loc.id === req.params.id);
  if (!location) {
    return res.status(404).json({ message: 'Location not found' });
  }
  res.json(location);
});

app.get('/api/categories', (req, res) => {
  res.json(categories);
});

app.get('/api/districts', (req, res) => {
  res.json(districts);
});

// Admin routes (simplified - in a real app, add proper authentication)
app.post('/api/admin/locations', (req, res) => {
  const newLocation = {
    id: `loc-${Date.now()}`,
    ...req.body,
    createdAt: new Date().toISOString(),
  };
  
  locations.push(newLocation);
  res.status(201).json(newLocation);
});

// Serve React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
