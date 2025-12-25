export const categories = [
  { id: 'craft', name: 'Craft' },
  { id: 'cuisine', name: 'Cuisine' },
  { id: 'heritage', name: 'Heritage' },
  { id: 'wellness', name: 'Wellness' },
  { id: 'rural', name: 'Rural Experience' },
];

export const districts = [
  'Thanjavur',
  'Madurai',
  'Sivaganga',
  'Kancheepuram',
  'Chengalpattu',
  'Coimbatore',
  'Tiruvallur',
  'Chennai',
  'Tirunelveli',
  'Tiruchirappalli',
  'Salem',
  'Erode',
  'Vellore',
  'Dharmapuri',
  'Krishnagiri',
  'Namakkal',
  'Karur',
  'Pudukkottai',
  'Dindigul',
  'Theni',
  'Virudhunagar',
  'Ramanathapuram',
  'Thoothukudi',
  'Tirupathur',
  'Tenkasi',
  'Nagapattinam',
  'Mayiladuthurai',
  'Tiruvarur',
  'Thiruvallur',
  'Ranipet',
  'Kallakurichi',
  'Ariyalur',
  'Cuddalore',
  'Perambalur',
  'Viluppuram',
  'The Nilgiris',
  'Kanyakumari',
];

export interface Location {
  id: string;
  name: string;
  category: string;
  locality: string;
  district: string;
  description: string;
  bestTimeToVisit: string;
  visitingHours: string;
  recommendedDuration: string;
  contact?: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  images: string[];
  createdAt: string;
}

export const locations: Location[] = [
  {
    id: 'loc-1',
    name: 'Bronze Idols of Swamimalai',
    category: 'craft',
    locality: 'Swamimalai',
    district: 'Thanjavur',
    description: 'Swamimalai is renowned for its exquisite bronze idols created using the ancient lost-wax casting technique. The artisans here have been crafting these idols for generations, following traditional methods passed down through centuries. The bronze icons made here are used in temples and households across India and abroad.',
    bestTimeToVisit: 'November to February',
    visitingHours: '9:00 AM - 6:00 PM',
    recommendedDuration: '2-3 hours',
    coordinates: {
      lat: 10.9576,
      lng: 79.3291
    },
    images: [
      'https://example.com/swamimalai1.jpg',
      'https://example.com/swamimalai2.jpg'
    ],
    createdAt: new Date().toISOString()
  },
  {
    id: 'loc-2',
    name: 'Tanjore Painting Workshops',
    category: 'craft',
    locality: 'Thanjavur City',
    district: 'Thanjavur',
    description: 'Thanjavur painting is a classical South Indian painting style known for its rich colors, surface richness, and compact composition. The art form dates back to the 16th century and is characterized by the use of gold foil, precious stones, and vibrant colors. Visitors can observe artists at work and even try their hand at this traditional art form.',
    bestTimeToVisit: 'October to March',
    visitingHours: '10:00 AM - 6:00 PM',
    recommendedDuration: '2 hours',
    coordinates: {
      lat: 10.7867,
      lng: 79.1378
    },
    images: [
      'https://example.com/tanjore1.jpg',
      'https://example.com/tanjore2.jpg'
    ],
    createdAt: new Date().toISOString()
  },
  {
    id: 'loc-3',
    name: 'Chettinad Heritage Walk',
    category: 'heritage',
    locality: 'Karaikudi',
    district: 'Sivaganga',
    description: 'Explore the grand mansions of the Chettiar community, known for their opulent architecture and intricate woodwork. The Chettiars were a prosperous banking community, and their palatial homes reflect their wealth and status. The heritage walk takes you through narrow lanes lined with these magnificent houses, many of which are over a century old.',
    bestTimeToVisit: 'November to February',
    visitingHours: '9:00 AM - 5:00 PM',
    recommendedDuration: '3-4 hours',
    coordinates: {
      lat: 10.0667,
      lng: 78.7833
    },
    images: [
      'https://example.com/chettinad1.jpg',
      'https://example.com/chettinad2.jpg'
    ],
    createdAt: new Date().toISOString()
  },
  // Additional locations...
  {
    id: 'loc-4',
    name: 'Meenakshi Amman Temple Heritage Walk',
    category: 'heritage',
    locality: 'Madurai',
    district: 'Madurai',
    description: 'The Meenakshi Amman Temple is a historic Hindu temple located on the southern bank of the Vaigai River. The temple complex is a stunning example of Dravidian architecture, with its towering gopurams (temple towers) covered in thousands of colorful sculptures. The heritage walk takes you through the temple\'s history, architecture, and the daily rituals that have been performed here for centuries.',
    bestTimeToVisit: 'October to March',
    visitingHours: '5:00 AM - 12:30 PM, 4:00 PM - 10:00 PM',
    recommendedDuration: '2-3 hours',
    coordinates: {
      lat: 9.9197,
      lng: 78.1194
    },
    images: [
      'https://example.com/meenakshi1.jpg',
      'https://example.com/meenakshi2.jpg'
    ],
    createdAt: new Date().toISOString()
  },
  {
    id: 'loc-5',
    name: 'Kanchipuram Silk Weaving',
    category: 'craft',
    locality: 'Kanchipuram',
    district: 'Kanchipuram',
    description: 'Kanchipuram is famous for its handwoven silk sarees, known as Kanjeevaram sarees. These sarees are known for their durability, rich texture, and vibrant colors. The weaving process is intricate and involves pure silk, gold/silver zari, and traditional designs. Visitors can observe the weaving process and purchase authentic Kanjeevaram sarees directly from the weavers.',
    bestTimeToVisit: 'November to February',
    visitingHours: '9:00 AM - 6:00 PM',
    recommendedDuration: '2-3 hours',
    coordinates: {
      lat: 12.8397,
      lng: 79.7000
    },
    images: [
      'https://example.com/kanchi1.jpg',
      'https://example.com/kanchi2.jpg'
    ],
    createdAt: new Date().toISOString()
  },
  {
    id: 'loc-6',
    name: 'Mahabalipuram Stone Carving',
    category: 'craft',
    locality: 'Mahabalipuram',
    district: 'Chengalpattu',
    description: 'Mahabalipuram is renowned for its stone carving tradition that dates back to the Pallava dynasty. The town is home to numerous ancient stone temples and sculptures, and the tradition continues today with local artisans creating beautiful stone carvings. Visitors can watch the artisans at work and purchase hand-carved souvenirs.',
    bestTimeToVisit: 'November to February',
    visitingHours: '9:00 AM - 6:00 PM',
    recommendedDuration: '2-3 hours',
    coordinates: {
      lat: 12.6168,
      lng: 80.1920
    },
    images: [
      'https://example.com/mahabalipuram1.jpg',
      'https://example.com/mahabalipuram2.jpg'
    ],
    createdAt: new Date().toISOString()
  },
  {
    id: 'loc-7',
    name: 'Siddha Wellness Center',
    category: 'wellness',
    locality: 'Coimbatore',
    district: 'Coimbatore',
    description: 'Experience traditional Siddha medicine and wellness treatments at this authentic wellness center. Siddha is one of the oldest systems of medicine in India, with a focus on maintaining health and treating diseases through natural methods. The center offers various therapies, yoga, and Ayurvedic treatments in a serene environment.',
    bestTimeToVisit: 'Year-round',
    visitingHours: '7:00 AM - 7:00 PM',
    recommendedDuration: 'Half-day to multiple days',
    coordinates: {
      lat: 11.0168,
      lng: 76.9558
    },
    images: [
      'https://example.com/wellness1.jpg',
      'https://example.com/wellness2.jpg'
    ],
    createdAt: new Date().toISOString()
  },
  {
    id: 'loc-8',
    name: 'Village Agri-Tourism Experience',
    category: 'rural',
    locality: 'Madurai Rural',
    district: 'Madurai',
    description: 'Experience the authentic rural life of Tamil Nadu with this immersive agri-tourism experience. Participate in farming activities, learn about traditional agricultural practices, and enjoy a home-cooked meal with a local family. This experience offers a unique opportunity to understand the rural way of life and the challenges faced by farmers.',
    bestTimeToVisit: 'August to January',
    visitingHours: '6:00 AM - 6:00 PM',
    recommendedDuration: 'Full day',
    coordinates: {
      lat: 9.9252,
      lng: 78.1198
    },
    images: [
      'https://example.com/village1.jpg',
      'https://example.com/village2.jpg'
    ],
    createdAt: new Date().toISOString()
  }
];
