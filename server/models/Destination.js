import mongoose from 'mongoose';

const destinationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  category: [{
    type: String
  }],
  interests: [{
    type: String
  }],
  latitude: {
    type: Number,
    required: true
  },
  longitude: {
    type: Number,
    required: true
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 4
  },
  popularityScore: {
    type: Number,
    min: 0,
    max: 100,
    default: 50
  },
  mustSee: {
    type: Boolean,
    default: false
  },
  visitDurationHours: {
    type: Number,
    default: 1
  },
  entryFee: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

export default mongoose.model('Destination', destinationSchema);
