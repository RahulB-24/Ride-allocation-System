const mongoose = require('mongoose');

const DriverSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  available: {
    type: Boolean,
    default: true
  },
  currentRide: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Ride',
    default: null
  },
  location: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Driver', DriverSchema);