const mongoose = require('mongoose');
const Driver = require('./models/Driver');

mongoose.connect('mongodb://localhost:27017/rideAllocation', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected for initialization'))
.catch(err => console.log(err));

const initializeDrivers = async () => {
  try {
    await Driver.deleteMany({});
    
    const drivers = [
      { name: 'Driver 1', location: 'Downtown', available: true },
      { name: 'Driver 2', location: 'Uptown', available: true }
    ];
    
    await Driver.insertMany(drivers);
    console.log('Drivers initialized successfully');
    process.exit(0);
  } catch (err) {
    console.error('Error initializing drivers:', err);
    process.exit(1);
  }
};

initializeDrivers();