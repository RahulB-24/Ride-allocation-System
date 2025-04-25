const mongoose = require('mongoose');

const PassengerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['waiting', 'assigned', 'completed'],
    default: 'waiting'
  },
  assignedDriver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Driver',
    default: null
  },
  completedAt: {
    type: Date
  }
});

module.exports = mongoose.model('Passenger', PassengerSchema);