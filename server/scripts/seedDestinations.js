import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Destination from '../models/Destination.js';

dotenv.config();

async function main() {
  await mongoose.connect(process.env.MONGODB_URI, {});
  await Destination.deleteMany({});

  await Destination.insertMany([
    // Thanjavur (7)
    {
      name: 'Brihadeeswarar Temple (Big Temple)',
      city: 'Thanjavur',
      category: ['temple', 'heritage'],
      interests: ['temple', 'history', 'architecture'],
      latitude: 10.7870,
      longitude: 79.1318,
      rating: 4.8,
      popularityScore: 98,
      mustSee: true,
      visitDurationHours: 2,
      entryFee: 0
    },
    {
      name: 'Thanjavur Palace',
      city: 'Thanjavur',
      category: ['palace', 'museum'],
      interests: ['history', 'architecture'],
      latitude: 10.7849,
      longitude: 79.1315,
      rating: 4.3,
      popularityScore: 85,
      mustSee: true,
      visitDurationHours: 1.5,
      entryFee: 50
    },
    {
      name: 'Saraswathi Mahal Library',
      city: 'Thanjavur',
      category: ['library', 'museum'],
      interests: ['history', 'culture'],
      latitude: 10.7850,
      longitude: 79.1321,
      rating: 4.4,
      popularityScore: 82,
      mustSee: false,
      visitDurationHours: 1,
      entryFee: 20
    },
    {
      name: 'Sivaganga Park',
      city: 'Thanjavur',
      category: ['park', 'garden'],
      interests: ['nature', 'family'],
      latitude: 10.7858,
      longitude: 79.1330,
      rating: 4.1,
      popularityScore: 75,
      mustSee: false,
      visitDurationHours: 1,
      entryFee: 10
    },
    {
      name: 'Schwartz Church',
      city: 'Thanjavur',
      category: ['church', 'heritage'],
      interests: ['history', 'architecture'],
      latitude: 10.7823,
      longitude: 79.1302,
      rating: 4.2,
      popularityScore: 72,
      mustSee: false,
      visitDurationHours: 0.5,
      entryFee: 0
    },
    {
      name: 'Sangeetha Mahal',
      city: 'Thanjavur',
      category: ['heritage', 'concert_hall'],
      interests: ['culture', 'music'],
      latitude: 10.7835,
      longitude: 79.1320,
      rating: 4.3,
      popularityScore: 70,
      mustSee: false,
      visitDurationHours: 0.5,
      entryFee: 10
    },
    {
      name: 'Vijayanagar Fort',
      city: 'Thanjavur',
      category: ['fort', 'heritage'],
      interests: ['history', 'architecture'],
      latitude: 10.7860,
      longitude: 79.1310,
      rating: 4.0,
      popularityScore: 68,
      mustSee: true,
      visitDurationHours: 1,
      entryFee: 30
    },

    // Kanchipuram (7)
    {
      name: 'Kamakshi Amman Temple',
      city: 'Kanchipuram',
      category: ['temple'],
      interests: ['temple', 'spirituality'],
      latitude: 12.8342,
      longitude: 79.7036,
      rating: 4.7,
      popularityScore: 96,
      mustSee: true,
      visitDurationHours: 1.5,
      entryFee: 0
    },
    {
      name: 'Kailasanathar Temple',
      city: 'Kanchipuram',
      category: ['temple', 'heritage'],
      interests: ['temple', 'architecture'],
      latitude: 12.8450,
      longitude: 79.6950,
      rating: 4.6,
      popularityScore: 92,
      mustSee: true,
      visitDurationHours: 1.5,
      entryFee: 0
    },
    {
      name: 'Varadharaja Perumal Temple',
      city: 'Kanchipuram',
      category: ['temple'],
      interests: ['temple', 'history'],
      latitude: 12.8370,
      longitude: 79.7020,
      rating: 4.5,
      popularityScore: 90,
      mustSee: true,
      visitDurationHours: 1.5,
      entryFee: 0
    },
    {
      name: 'Ekambareswarar Temple',
      city: 'Kanchipuram',
      category: ['temple', 'heritage'],
      interests: ['temple', 'history'],
      latitude: 12.8474,
      longitude: 79.6998,
      rating: 4.6,
      popularityScore: 88,
      mustSee: false,
      visitDurationHours: 1.5,
      entryFee: 0
    },
    {
      name: 'Devarajaswami Temple',
      city: 'Kanchipuram',
      category: ['temple'],
      interests: ['temple', 'architecture'],
      latitude: 12.8345,
      longitude: 79.7002,
      rating: 4.3,
      popularityScore: 80,
      mustSee: false,
      visitDurationHours: 1,
      entryFee: 0
    },
    {
      name: 'Kanchipuram Silk Saree Showrooms',
      city: 'Kanchipuram',
      category: ['shopping', 'handicrafts'],
      interests: ['shopping', 'culture'],
      latitude: 12.8340,
      longitude: 79.7005,
      rating: 4.2,
      popularityScore: 75,
      mustSee: false,
      visitDurationHours: 2,
      entryFee: 0
    },
    {
      name: 'Vedanthangal Bird Sanctuary',
      city: 'Kanchipuram',
      category: ['wildlife', 'nature'],
      interests: ['nature', 'photography', 'birding'],
      latitude: 12.5400,
      longitude: 79.8500,
      rating: 4.4,
      popularityScore: 82,
      mustSee: false,
      visitDurationHours: 3,
      entryFee: 50
    },

    // Coimbatore (7)
    {
      name: 'Marudhamalai Murugan Temple',
      city: 'Coimbatore',
      category: ['temple', 'hill'],
      interests: ['temple', 'viewpoints', 'spirituality'],
      latitude: 11.0416,
      longitude: 76.9209,
      rating: 4.7,
      popularityScore: 95,
      mustSee: true,
      visitDurationHours: 2,
      entryFee: 0
    },
    {
      name: 'Adiyogi Shiva Statue',
      city: 'Coimbatore',
      category: ['spiritual', 'landmark'],
      interests: ['spirituality', 'photography', 'culture'],
      latitude: 10.9723,
      longitude: 76.7405,
      rating: 4.8,
      popularityScore: 98,
      mustSee: true,
      visitDurationHours: 2.5,
      entryFee: 0
    },
    {
      name: 'Perur Pateeswarar Temple',
      city: 'Coimbatore',
      category: ['temple', 'heritage'],
      interests: ['temple', 'history', 'architecture'],
      latitude: 10.9786,
      longitude: 76.9272,
      rating: 4.6,
      popularityScore: 90,
      mustSee: true,
      visitDurationHours: 1.5,
      entryFee: 0
    },
    {
      name: 'Siruvani Waterfalls',
      city: 'Coimbatore',
      category: ['waterfall', 'nature'],
      interests: ['nature', 'trekking', 'photography'],
      latitude: 10.9381,
      longitude: 76.6892,
      rating: 4.4,
      popularityScore: 85,
      mustSee: false,
      visitDurationHours: 3,
      entryFee: 50
    },
    {
      name: 'Gass Forest Museum',
      city: 'Coimbatore',
      category: ['museum', 'nature'],
      interests: ['education', 'family', 'nature'],
      latitude: 11.0125,
      longitude: 76.9356,
      rating: 4.3,
      popularityScore: 78,
      mustSee: false,
      visitDurationHours: 1.5,
      entryFee: 40
    },
    {
      name: 'VOC Park and Zoo',
      city: 'Coimbatore',
      category: ['park', 'zoo'],
      interests: ['family', 'nature'],
      latitude: 11.0068,
      longitude: 76.9749,
      rating: 4.0,
      popularityScore: 75,
      mustSee: false,
      visitDurationHours: 2,
      entryFee: 30
    },
    {
      name: 'TNAU Botanical Garden',
      city: 'Coimbatore',
      category: ['garden', 'nature'],
      interests: ['nature', 'botany', 'photography'],
      latitude: 11.0122,
      longitude: 76.9304,
      rating: 4.3,
      popularityScore: 72,
      mustSee: false,
      visitDurationHours: 1.5,
      entryFee: 20
    },

    // Madurai (7)
    {
      name: 'Meenakshi Amman Temple',
      city: 'Madurai',
      category: ['temple', 'heritage'],
      interests: ['temple', 'architecture', 'history'],
      latitude: 9.9196,
      longitude: 78.1193,
      rating: 4.8,
      popularityScore: 99,
      mustSee: true,
      visitDurationHours: 3,
      entryFee: 0
    },
    {
      name: 'Thirumalai Nayakkar Palace',
      city: 'Madurai',
      category: ['palace', 'museum'],
      interests: ['history', 'architecture'],
      latitude: 9.9186,
      longitude: 78.1214,
      rating: 4.3,
      popularityScore: 85,
      mustSee: true,
      visitDurationHours: 1.5,
      entryFee: 50
    },
    {
      name: 'Gandhi Memorial Museum',
      city: 'Madurai',
      category: ['museum', 'history'],
      interests: ['history', 'education', 'culture'],
      latitude: 9.9217,
      longitude: 78.1244,
      rating: 4.4,
      popularityScore: 82,
      mustSee: false,
      visitDurationHours: 1.5,
      entryFee: 10
    },
    {
      name: 'Mariamman Teppakulam',
      city: 'Madurai',
      category: ['temple', 'water_tank'],
      interests: ['temple', 'photography', 'nature'],
      latitude: 9.9333,
      longitude: 78.1333,
      rating: 4.2,
      popularityScore: 78,
      mustSee: false,
      visitDurationHours: 1,
      entryFee: 0
    },
    {
      name: 'Koodal Azhagar Temple',
      city: 'Madurai',
      category: ['temple'],
      interests: ['temple', 'history'],
      latitude: 9.9186,
      longitude: 78.1189,
      rating: 4.5,
      popularityScore: 80,
      mustSee: false,
      visitDurationHours: 1,
      entryFee: 0
    },
    {
      name: 'Goripalayam Dargah',
      city: 'Madurai',
      category: ['mosque', 'heritage'],
      interests: ['history', 'architecture', 'culture'],
      latitude: 9.9200,
      longitude: 78.1167,
      rating: 4.1,
      popularityScore: 75,
      mustSee: false,
      visitDurationHours: 1,
      entryFee: 0
    },
    {
      name: 'Vandiyur Mariamman Teppakulam',
      city: 'Madurai',
      category: ['water_tank', 'park'],
      interests: ['nature', 'photography', 'relaxation'],
      latitude: 9.9250,
      longitude: 78.1300,
      rating: 4.0,
      popularityScore: 72,
      mustSee: true,
      visitDurationHours: 1,
      entryFee: 0
    },

    // Chennai (7)
    {
      name: 'Marina Beach',
      city: 'Chennai',
      category: ['beach'],
      interests: ['beach', 'relaxation', 'nature'],
      latitude: 13.0574,
      longitude: 80.2785,
      rating: 4.3,
      popularityScore: 95,
      mustSee: true,
      visitDurationHours: 2,
      entryFee: 0
    },
    {
      name: 'Kapaleeshwarar Temple',
      city: 'Chennai',
      category: ['temple', 'heritage'],
      interests: ['temple', 'architecture', 'history'],
      latitude: 13.0328,
      longitude: 80.2706,
      rating: 4.6,
      popularityScore: 92,
      mustSee: true,
      visitDurationHours: 1.5,
      entryFee: 0
    },
    {
      name: 'Government Museum',
      city: 'Chennai',
      category: ['museum', 'history'],
      interests: ['history', 'education', 'culture'],
      latitude: 13.0669,
      longitude: 80.2622,
      rating: 4.1,
      popularityScore: 82,
      mustSee: false,
      visitDurationHours: 2,
      entryFee: 50
    },
    {
      name: 'San Thome Basilica',
      city: 'Chennai',
      category: ['church', 'heritage'],
      interests: ['history', 'architecture', 'spirituality'],
      latitude: 13.0339,
      longitude: 80.2781,
      rating: 4.5,
      popularityScore: 88,
      mustSee: false,
      visitDurationHours: 1,
      entryFee: 0
    },
    {
      name: 'Guindy National Park',
      city: 'Chennai',
      category: ['park', 'nature'],
      interests: ['nature', 'wildlife', 'photography'],
      latitude: 13.0049,
      longitude: 80.2342,
      rating: 4.2,
      popularityScore: 85,
      mustSee: false,
      visitDurationHours: 2,
      entryFee: 30
    },
    {
      name: 'Valluvar Kottam',
      city: 'Chennai',
      category: ['monument', 'history'],
      interests: ['history', 'architecture', 'culture'],
      latitude: 13.0500,
      longitude: 80.2400,
      rating: 4.0,
      popularityScore: 78,
      mustSee: false,
      visitDurationHours: 1,
      entryFee: 10
    },
    {
      name: 'MGR Film City',
      city: 'Chennai',
      category: ['entertainment', 'theme_park'],
      interests: ['family', 'photography', 'culture'],
      latitude: 13.0100,
      longitude: 80.2000,
      rating: 4.2,
      popularityScore: 80,
      mustSee: true,
      visitDurationHours: 3,
      entryFee: 100
    },

    // Ooty (7)
    {
      name: 'Botanical Gardens',
      city: 'Ooty',
      category: ['garden', 'nature'],
      interests: ['nature', 'photography', 'relaxation'],
      latitude: 11.4138,
      longitude: 76.6969,
      rating: 4.5,
      popularityScore: 95,
      mustSee: true,
      visitDurationHours: 2,
      entryFee: 50
    },
    {
      name: 'Ooty Lake',
      city: 'Ooty',
      category: ['lake', 'boating'],
      interests: ['nature', 'boating', 'photography'],
      latitude: 11.4102,
      longitude: 76.6950,
      rating: 4.3,
      popularityScore: 90,
      mustSee: true,
      visitDurationHours: 2,
      entryFee: 150
    },
    {
      name: 'Doddabetta Peak',
      city: 'Ooty',
      category: ['mountain', 'viewpoint'],
      interests: ['nature', 'photography', 'viewpoints'],
      latitude: 11.4028,
      longitude: 76.7361,
      rating: 4.6,
      popularityScore: 92,
      mustSee: true,
      visitDurationHours: 2,
      entryFee: 30
    },
    {
      name: 'Rose Garden',
      city: 'Ooty',
      category: ['garden', 'nature'],
      interests: ['nature', 'photography', 'relaxation'],
      latitude: 11.4236,
      longitude: 76.6956,
      rating: 4.4,
      popularityScore: 88,
      mustSee: false,
      visitDurationHours: 1.5,
      entryFee: 40
    },
    {
      name: 'Pykara Lake',
      city: 'Ooty',
      category: ['lake', 'nature'],
      interests: ['nature', 'boating', 'photography'],
      latitude: 11.3500,
      longitude: 76.6500,
      rating: 4.5,
      popularityScore: 85,
      mustSee: false,
      visitDurationHours: 3,
      entryFee: 100
    },
    {
      name: 'Tea Museum',
      city: 'Ooty',
      category: ['museum', 'tea_estate'],
      interests: ['education', 'nature', 'culture'],
      latitude: 11.4000,
      longitude: 76.7000,
      rating: 4.2,
      popularityScore: 80,
      mustSee: false,
      visitDurationHours: 1,
      entryFee: 75
    },
    {
      name: 'Wax World Museum',
      city: 'Ooty',
      category: ['museum', 'entertainment'],
      interests: ['family', 'education', 'photography'],
      latitude: 11.4100,
      longitude: 76.7000,
      rating: 4.0,
      popularityScore: 75,
      mustSee: false,
      visitDurationHours: 1,
      entryFee: 50
    }
  ]);

  console.log('Successfully seeded all cities!');
  process.exit(0);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
