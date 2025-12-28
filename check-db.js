const mongoose = require('mongoose');
require('dotenv').config();

async function checkDatabase() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log('Collections:', collections.map(c => c.name));

    const Destination = require('./server/models/Destination');
    const count = await Destination.countDocuments();
    console.log(`Total destinations: ${count}`);

    const coimbatorePlaces = await Destination.find({ city: 'Coimbatore' });
    console.log(`Coimbatore places: ${coimbatorePlaces.length}`);
    console.log('Sample:', coimbatorePlaces[0]);

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await mongoose.disconnect();
    process.exit(0);
  }
}

checkDatabase();
