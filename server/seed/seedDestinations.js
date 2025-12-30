const mongoose = require('mongoose');
const Destination = require('../models/Destination');
require('dotenv').config();

const destinations = [
  {
    city: 'Chennai',
    name: 'Marina Beach',
    description: 'Longest natural urban beach in India, stretching along the Bay of Bengal',
    entryFee: 0,
    visitDurationHours: 2,
    rating: 4.5,
    latitude: 13.0544,
    longitude: 80.2837,
    imageUrl: '/images/marina-beach.jpg',
    category: 'beach',
    bestTimeToVisit: 'November to February',
    facilities: ['parking', 'food stalls', 'restrooms']
  },
  {
    city: 'Chennai',
    name: 'Fort St. George',
    description: 'First English fortress in India, now housing the Tamil Nadu legislative assembly',
    entryFee: 200,
    visitDurationHours: 1.5,
    rating: 4.3,
    latitude: 13.0827,
    longitude: 80.2707,
    imageUrl: '/images/fort-st-george.jpg',
    category: 'historical',
    bestTimeToVisit: 'October to March',
    facilities: ['museum', 'parking', 'guide service']
  },
  {
    city: 'Chennai',
    name: 'Kapaleeshwarar Temple',
    description: 'Ancient Hindu temple dedicated to Lord Shiva with Dravidian architecture',
    entryFee: 0,
    visitDurationHours: 1,
    rating: 4.7,
    latitude: 13.0338,
    longitude: 80.2697,
    imageUrl: '/images/kapaleeshwarar-temple.jpg',
    category: 'religious',
    bestTimeToVisit: 'October to March',
    facilities: ['parking', 'prayer hall', 'shops']
  },
  {
    city: 'Madurai',
    name: 'Meenakshi Amman Temple',
    description: 'Historic Hindu temple with towering gopurams and intricate sculptures',
    entryFee: 0,
    visitDurationHours: 2,
    rating: 4.8,
    latitude: 9.919,
    longitude: 78.1195,
    imageUrl: '/images/meenakshi-temple.jpg',
    category: 'religious',
    bestTimeToVisit: 'October to March',
    facilities: ['parking', 'prayer halls', 'museum']
  },
  {
    city: 'Madurai',
    name: 'Thirumalai Nayak Palace',
    description: '17th-century palace showcasing Indo-Saracenic architecture',
    entryFee: 50,
    visitDurationHours: 1,
    rating: 4.4,
    latitude: 9.9189,
    longitude: 78.1234,
    imageUrl: '/images/thirumalai-palace.jpg',
    category: 'historical',
    bestTimeToVisit: 'October to March',
    facilities: ['museum', 'parking', 'light show']
  },
  {
    city: 'Coimbatore',
    name: 'Marudhamalai Temple',
    description: 'Hilltop temple dedicated to Lord Murugan with panoramic views',
    entryFee: 0,
    visitDurationHours: 1.5,
    rating: 4.6,
    latitude: 10.9496,
    longitude: 76.9406,
    imageUrl: '/images/marudhamalai-temple.jpg',
    category: 'religious',
    bestTimeToVisit: 'September to March',
    facilities: ['parking', 'steps', 'prayer hall']
  },
  {
    city: 'Coimbatore',
    name: 'VOC Park and Zoo',
    description: 'Urban park with zoo, aquarium, and recreational facilities',
    entryFee: 30,
    visitDurationHours: 2,
    rating: 4.2,
    latitude: 11.0168,
    longitude: 76.9558,
    imageUrl: '/images/voc-park.jpg',
    category: 'park',
    bestTimeToVisit: 'October to March',
    facilities: ['zoo', 'parking', 'food court']
  },
  {
    city: 'Ooty',
    name: 'Ooty Lake & Boat House',
    description: 'Artificial lake offering boating and scenic views of Nilgiri hills',
    entryFee: 0,
    visitDurationHours: 2,
    rating: 4.5,
    latitude: 11.4229,
    longitude: 76.7129,
    imageUrl: '/images/ooty-lake.jpg',
    category: 'lake',
    bestTimeToVisit: 'April to June, September to November',
    facilities: ['boating', 'parking', 'food stalls']
  },
  {
    city: 'Ooty',
    name: 'Botanical Gardens',
    description: '55-acre garden with diverse flora and a fossil tree',
    entryFee: 30,
    visitDurationHours: 2,
    rating: 4.6,
    latitude: 11.4102,
    longitude: 76.695,
    imageUrl: '/images/botanical-gardens.jpg',
    category: 'garden',
    bestTimeToVisit: 'April to June, September to November',
    facilities: ['parking', 'greenhouse', 'guided tours']
  },
  {
    city: 'Kanchipuram',
    name: 'Kamakshi Amman Temple',
    description: 'Sacred temple of Goddess Kamakshi, one of the 51 Shakti Peethas',
    entryFee: 0,
    visitDurationHours: 1,
    rating: 4.7,
    latitude: 12.8479,
    longitude: 79.7038,
    imageUrl: '/images/kamakshi-temple.jpg',
    category: 'religious',
    bestTimeToVisit: 'October to March',
    facilities: ['parking', 'prayer halls', 'shops']
  },
  {
    city: 'Kanchipuram',
    name: 'Ekambareswarar Temple',
    description: 'Temple of Lord Shiva with one of the tallest gopurams in India',
    entryFee: 0,
    visitDurationHours: 1.5,
    rating: 4.6,
    latitude: 12.8475,
    longitude: 79.6998,
    imageUrl: '/images/ekambareswarar-temple.jpg',
    category: 'religious',
    bestTimeToVisit: 'October to March',
    facilities: ['parking', 'prayer halls', 'mangrove tree']
  },
  {
    city: 'Thanjavur',
    name: 'Brihadeeswarar Temple',
    description: 'UNESCO World Heritage site with massive Shiva lingam and towering vimana',
    entryFee: 50,
    visitDurationHours: 2,
    rating: 4.8,
    latitude: 10.787,
    longitude: 79.139,
    imageUrl: '/images/brihadeeswarar-temple.jpg',
    category: 'religious',
    bestTimeToVisit: 'October to March',
    facilities: ['parking', 'museum', 'guided tours']
  },
  {
    city: 'Thanjavur',
    name: 'Thanjavur Palace',
    description: '16th-century palace housing art gallery and manuscript library',
    entryFee: 50,
    visitDurationHours: 1.5,
    rating: 4.4,
    latitude: 10.783,
    longitude: 79.136,
    imageUrl: '/images/thanjavur-palace.jpg',
    category: 'historical',
    bestTimeToVisit: 'October to March',
    facilities: ['museum', 'art gallery', 'parking']
  },
  {
    city: 'Thanjavur',
    name: 'Saraswathi Mahal Library',
    description: 'One of the oldest libraries in Asia with rare palm leaf manuscripts',
    entryFee: 10,
    visitDurationHours: 1,
    rating: 4.3,
    latitude: 10.785,
    longitude: 79.1378,
    imageUrl: '/images/saraswathi-mahal-library.jpg',
    category: 'cultural',
    bestTimeToVisit: 'October to March',
    facilities: ['reading room', 'parking', 'guided tours']
  },
  {
    city: 'Chennai',
    name: 'San Thome Basilica',
    description: 'Roman Catholic minor basilica built over the tomb of Saint Thomas',
    entryFee: 0,
    visitDurationHours: 1,
    rating: 4.6,
    latitude: 13.0321,
    longitude: 80.2771,
    imageUrl: '/images/san-thome-basilica.jpg',
    category: 'religious',
    bestTimeToVisit: 'October to March',
    facilities: ['parking', 'prayer hall', 'museum']
  },
  {
    city: 'Chennai',
    name: 'G.D. Naidu Museum',
    description: 'Museum showcasing the inventions and life of G.D. Naidu',
    entryFee: 20,
    visitDurationHours: 1.5,
    rating: 4.2,
    latitude: 13.0544,
    longitude: 80.2837,
    imageUrl: '/images/gd-naidu-museum.jpg',
    category: 'museum',
    bestTimeToVisit: 'October to March',
    facilities: ['parking', 'guided tours', 'exhibits']
  },
  {
    city: 'Madurai',
    name: 'Koodal Azhagar Temple',
    description: 'Ancient Vishnu temple with beautiful architecture and carvings',
    entryFee: 0,
    visitDurationHours: 1.5,
    rating: 4.5,
    latitude: 9.9190,
    longitude: 78.1198,
    imageUrl: '/images/koodal-azhagar-temple.jpg',
    category: 'religious',
    bestTimeToVisit: 'October to March',
    facilities: ['parking', 'prayer hall', 'shops']
  },
  {
    city: 'Coimbatore',
    name: 'Siruvani Waterfalls',
    description: 'Scenic waterfall known for its sweet and tasty water',
    entryFee: 30,
    visitDurationHours: 2,
    rating: 4.4,
    latitude: 11.0168,
    longitude: 76.9558,
    imageUrl: '/images/siruvani-waterfalls.jpg',
    category: 'nature',
    bestTimeToVisit: 'September to March',
    facilities: ['parking', 'viewpoints', 'food stalls']
  },
  {
    city: 'Ooty',
    name: 'Doddabetta Peak',
    description: 'Highest mountain in the Nilgiri Hills with panoramic views',
    entryFee: 20,
    visitDurationHours: 1.5,
    rating: 4.6,
    latitude: 11.4102,
    longitude: 76.6950,
    imageUrl: '/images/doddabetta-peak.jpg',
    category: 'nature',
    bestTimeToVisit: 'April to June, September to November',
    facilities: ['parking', 'viewpoint', 'telescope', 'food court']
  },
  {
    city: 'Ooty',
    name: 'Nilgiri Mountain Railway',
    description: 'UNESCO World Heritage toy train journey through Nilgiri hills',
    entryFee: 300,
    visitDurationHours: 5,
    rating: 4.8,
    latitude: 11.4102,
    longitude: 76.6950,
    imageUrl: '/images/nilgiri-mountain-railway.jpg',
    category: 'transport',
    bestTimeToVisit: 'April to June, September to November',
    facilities: ['station', 'booking office', 'refreshments']
  },
  {
    city: 'Kanchipuram',
    name: 'Varadharaja Perumal Temple',
    description: 'Ancient Vishnu temple with intricate stone carvings',
    entryFee: 0,
    visitDurationHours: 1.5,
    rating: 4.6,
    latitude: 12.8342,
    longitude: 79.7036,
    imageUrl: '/images/varadharaja-perumal-temple.jpg',
    category: 'religious',
    bestTimeToVisit: 'October to March',
    facilities: ['parking', 'prayer halls', 'shops']
  },
  {
    city: 'Kanchipuram',
    name: 'Kanchipuram Silk Sarees',
    description: 'Traditional silk weaving centers and shopping for authentic Kanchipuram sarees',
    entryFee: 0,
    visitDurationHours: 2,
    rating: 4.3,
    latitude: 12.8342,
    longitude: 79.7036,
    imageUrl: '/images/kanchipuram-silk.jpg',
    category: 'shopping',
    bestTimeToVisit: 'October to March',
    facilities: ['parking', 'showrooms', 'workshops']
  },
  {
    city: 'Kanyakumari',
    name: 'Gandhi Memorial Museum',
    description: 'Memorial dedicated to Mahatma Gandhi at the southern tip of India',
    entryFee: 10,
    visitDurationHours: 1,
    rating: 4.4,
    latitude: 8.0780,
    longitude: 77.5410,
    imageUrl: '/images/gandhi-memorial-museum.jpg',
    category: 'memorial',
    bestTimeToVisit: 'October to March',
    facilities: ['parking', 'museum', 'viewpoint']
  }
];

async function seedDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    await Destination.deleteMany({});
    console.log('Cleared existing destinations');

    await Destination.insertMany(destinations);
    console.log('Added sample destinations');

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDB();
