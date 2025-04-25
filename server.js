const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());


mongoose.connect('mongodb://localhost:27017/rideAllocation', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

app.use('/api/drivers', require('./routes/drivers'));
app.use('/api/passengers', require('./routes/passengers'));
app.use('/api/rides', require('./routes/rides'));

app.use(express.static('public'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));