const express = require('express');
const router = express.Router();
const Passenger = require('../models/Passenger');
const Driver = require('../models/Driver');
const Ride = require('../models/Ride');

// Get all passengers
router.get('/', async (req, res) => {
  try {
    const passengers = await Passenger.find().populate('assignedDriver');
    res.json(passengers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a passenger and assign a driver
router.post('/', async (req, res) => {
  const passenger = new Passenger({
    name: req.body.name,
    location: req.body.location
  });

  try {
    // Find available driver
    const availableDriver = await Driver.findOne({ available: true });
    
    if (!availableDriver) {
      return res.status(400).json({ message: 'No drivers available' });
    }

    // Create passenger
    const newPassenger = await passenger.save();
    
    // Create ride
    const ride = new Ride({
      passenger: newPassenger._id,
      driver: availableDriver._id
    });
    const newRide = await ride.save();

    // Update driver
    availableDriver.available = false;
    availableDriver.currentRide = newRide._id;
    await availableDriver.save();

    // Update passenger
    newPassenger.status = 'assigned';
    newPassenger.assignedDriver = availableDriver._id;
    await newPassenger.save();

    // Schedule ride completion after 30 seconds
    setTimeout(async () => {
      const completedRide = await Ride.findById(newRide._id)
        .populate('driver')
        .populate('passenger');
      
      if (completedRide && completedRide.status === 'active') {
        completedRide.status = 'completed';
        completedRide.endTime = Date.now();
        await completedRide.save();

        const driver = await Driver.findById(completedRide.driver._id);
        if (driver) {
          driver.available = true;
          driver.currentRide = null;
          await driver.save();
        }

        const passenger = await Passenger.findById(completedRide.passenger._id);
        if (passenger) {
          passenger.status = 'completed';
          passenger.completedAt = new Date();
          await passenger.save();
        }
      }
    }, 30000);

    res.status(201).json({
      passenger: newPassenger,
      driver: availableDriver,
      ride: newRide
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
