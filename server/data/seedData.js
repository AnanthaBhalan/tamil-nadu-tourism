export const categories = [
  { id: 'craft', name: 'Craft' },
  { id: 'heritage', name: 'Heritage' },
  { id: 'culinary', name: 'Culinary' },
  { id: 'wellness', name: 'Wellness' },
  { id: 'rural', name: 'Rural' }
];

export const districts = [
  'Thanjavur',
  'Madurai',
  'Kancheepuram',
  'Sivaganga',
  'Coimbatore',
  'Chennai'
];

export const locations = [
  {
    id: '1',
    title: 'Bronze Idols of Swamimalai',
    category: 'craft',
    district: 'Thanjavur',
    description: 'Discover the ancient art of bronze idol making in Swamimalai, where artisans have been crafting exquisite bronze statues for centuries using the traditional lost-wax casting technique.',
    bestTimeToVisit: 'October to March',
    visitingHours: '9:00 AM - 6:00 PM',
    duration: '2-3 hours',
    contact: 'Local Artisan Association: +91 XXXXXXXXXX',
    coordinates: [10.9576, 79.3314],
    images: ['/images/swamimalai-1.jpg', '/images/swamimalai-2.jpg']
  },
  {
    id: '2',
    title: 'Tanjore Painting Clusters',
    category: 'craft',
    district: 'Thanjavur',
    description: 'Explore the vibrant world of Tanjore paintings, known for their rich colors, gold foil work, and glass bead embellishments. Visit local workshops to see artists create these masterpieces.',
    bestTimeToVisit: 'November to February',
    visitingHours: '10:00 AM - 6:00 PM',
    duration: '1-2 hours',
    contact: 'Tanjore Art Gallery: +91 XXXXXXXXXX',
    coordinates: [10.7867, 79.1378],
    images: ['/images/tanjore-painting-1.jpg']
  },
  // Add more locations as needed
];
