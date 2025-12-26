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
export const foodPlaces = {
  Coimbatore: [
    {
      id: 'cbt-1',
      name: 'Hari Bhavanam',
      cuisine: 'South Indian, Vegetarian',
      speciality: 'Authentic Tamil meals and filter coffee',
      area: 'Gandhipuram',
      image: '/images/food/coimbatore/hari-bhavanam.jpg'
    },
    {
      id: 'cbt-2',
      name: 'Annalakshmi Restaurant',
      cuisine: 'South Indian, Vegetarian',
      speciality: 'Traditional sattvic meals',
      area: 'RS Puram',
      image: '/images/food/coimbatore/annalakshmi.jpg'
    },
    {
      id: 'cbt-3',
      name: 'Junior Kuppanna',
      cuisine: 'South Indian, Non-Vegetarian',
      speciality: 'Kongu-style biryani and mutton dishes',
      area: 'Peelamedu',
      image: '/images/food/coimbatore/junior-kuppanna.jpg'
    },
    {
      id: 'cbt-4',
      name: 'Sree Annapoorna',
      cuisine: 'South Indian, Vegetarian',
      speciality: 'Ghee roast and dosa varieties',
      area: 'Town Hall',
      image: '/images/food/coimbatore/sree-annapoorna.jpg'
    },
    {
      id: 'cbt-5',
      name: 'On The Go',
      cuisine: 'Multi-Cuisine',
      speciality: 'Burgers, pasta and continental food',
      area: 'Race Course',
      image: '/images/food/coimbatore/on-the-go.jpg'
    },
    {
      id: 'cbt-10',
      name: 'Ammayi Café',
      cuisine: 'Cafe, Continental',
      speciality: 'Filter coffee and quick bites',
      area: 'Bharathipuram',
      image: '/images/food/coimbatore/ammayi-cafe.jpg'
    },
    {
      id: 'cbt-11',
      name: 'Marudhamalai Tiffin Centre',
      cuisine: 'South Indian, Vegetarian',
      speciality: 'Idli, dosa and filter coffee',
      area: 'Marudhamalai',
      image: '/images/food/coimbatore/marudhamalai-tiffin.jpg'
    },
    {
      id: 'cbt-12',
      name: 'VOC Park Cafe',
      cuisine: 'Cafe, Snacks',
      speciality: 'Quick bites and beverages',
      area: 'VOC Park & Zoo',
      image: '/images/food/coimbatore/voc-park-cafe.jpg'
    },
    {
      id: 'cbt-13',
      name: 'G.D. Naidu Mess',
      cuisine: 'South Indian, Non-Vegetarian',
      speciality: 'Kongu-style meals and local specialties',
      area: 'G.D. Naidu Museum',
      image: '/images/food/coimbatore/gd-naidu-mess.jpg'
    },
    {
      id: 'cbt-14',
      name: 'Black Thunder Food Court',
      cuisine: 'Multi-Cuisine',
      speciality: 'Family-friendly meals and snacks',
      area: 'Black Thunder',
      image: '/images/food/coimbatore/black-thunder-foodcourt.jpg'
    }
  ]
  ],
  Kancheepuram: [
    {
      id: 'kch-1',
      name: 'Saravana Bhavan',
      cuisine: 'South Indian, Vegetarian',
      speciality: 'Thali and dosas',
      area: 'Near Kamakshi Amman Temple',
      image: '/images/food/kancheepuram/saravana-bhavan.svg'
    },
    {
      id: 'kch-2',
      name: 'Annan Cafe',
      cuisine: 'South Indian, Vegetarian',
      speciality: 'Filter coffee and snacks',
      area: 'Near Ekambareswarar Temple',
      image: '/images/food/kancheepuram/annan-cafe.svg'
    },
    {
      id: 'kch-3',
      name: 'Shree Krishna Mess',
      cuisine: 'South Indian, Non-Vegetarian',
      speciality: 'Kanchipuram-style meals',
      area: 'Near Varadharaja Perumal Temple',
      image: '/images/food/kancheepuram/shree-krishna-mess.svg'
    },
    {
      id: 'kch-4',
      name: 'Silk Lane Eatery',
      cuisine: 'Multi-Cuisine',
      speciality: 'Quick meals for shoppers',
      area: 'Silk Weaving Centers',
      image: '/images/food/kancheepuram/silk-lane-eatery.svg'
    }
  ]
};
