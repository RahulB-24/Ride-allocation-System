const express = require('express');
const router = express.Router();
const Ride = require('../models/Ride');

// Get all rides
router.get('/', async (req, res) => {
  try {
    const rides = await Ride.find()
      .populate('passenger')
      .populate('driver');
    res.json(rides);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;