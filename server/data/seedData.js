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
  ],
  Madurai: [
    {
      id: 'mad-1',
      name: 'Meenakshi Bhavan',
      cuisine: 'South Indian, Vegetarian',
      speciality: 'Traditional meals and filter coffee',
      area: 'Near Meenakshi Amman Temple',
      image: '/images/food/madurai/meenakshi-bhavan.svg'
    },
    {
      id: 'mad-2',
      name: 'Palace View Mess',
      cuisine: 'South Indian, Non-Vegetarian',
      speciality: 'Madurai-style mutton and biryani',
      area: 'Near Thirumalai Nayakkar Palace',
      image: '/images/food/madurai/palace-view-mess.svg'
    },
    {
      id: 'mad-3',
      name: 'Gandhi Cafe',
      cuisine: 'Cafe, Snacks',
      speciality: 'Light bites and beverages',
      area: 'Near Gandhi Memorial Museum',
      image: '/images/food/madurai/gandhi-cafe.svg'
    },
    {
      id: 'mad-4',
      name: 'Azhagar Tiffin',
      cuisine: 'South Indian, Vegetarian',
      speciality: 'Quick tiffin meals and snacks',
      area: 'Near Koodal Azhagar Temple',
      image: '/images/food/madurai/azhagar-tiffin.svg'
    }
  ],
  Ooty: [
    {
      id: 'oty-1',
      name: 'Botanical Garden Café',
      cuisine: 'Cafe, Snacks',
      speciality: 'Light meals and beverages near the gardens',
      area: 'Ooty Botanical Gardens',
      image: '/images/food/ooty/botanical-cafe.jpg'
    },
    {
      id: 'oty-2',
      name: 'Nilgiri Station Canteen',
      cuisine: 'Cafe, Snacks',
      speciality: 'Quick bites for train visitors',
      area: 'Nilgiri Mountain Railway Station',
      image: '/images/food/ooty/nilgiri-station-canteen.jpg'
    },
    {
      id: 'oty-3',
      name: 'Doddabetta Tea Stall',
      cuisine: 'Tea Stall, Snacks',
      speciality: 'Hot tea and local snacks with mountain view',
      area: 'Doddabetta Peak',
      image: '/images/food/ooty/doddabetta-tea-stall.jpg'
    },
    {
      id: 'oty-4',
      name: 'Boat House Café',
      cuisine: 'Cafe, Continental',
      speciality: 'Lake-side snacks and beverages',
      area: 'Ooty Lake & Boat House',
      image: '/images/food/ooty/boat-house-cafe.jpg'
    }
  ],
  Chennai: [
    {
      id: 'chn-1',
      name: 'Sea Breeze Café',
      cuisine: 'Cafe, Snacks',
      speciality: 'Sea-facing snacks and filter coffee',
      area: 'Marina Beach',
      image: '/images/food/chennai/sea-breeze-cafe.svg'
    },
    {
      id: 'chn-2',
      name: 'Kapali Tiffin',
      cuisine: 'South Indian, Vegetarian',
      speciality: 'Traditional tiffins near the temple',
      area: 'Near Kapaleeshwarar Temple',
      image: '/images/food/chennai/kapali-tiffin.svg'
    },
    {
      id: 'chn-3',
      name: 'Fort View Restaurant',
      cuisine: 'Multi-Cuisine',
      speciality: 'Meals with a view of Fort St. George',
      area: 'Near Fort St. George',
      image: '/images/food/chennai/fort-view-restaurant.svg'
    },
    {
      id: 'chn-4',
      name: 'Basilica Bistro',
      cuisine: 'Cafe, Continental',
      speciality: 'Coffee and light meals near the basilica',
      area: 'Near San Thome Basilica',
      image: '/images/food/chennai/basilica-bistro.svg'
    }
  ]
};
