const itemRoutes = require('./routes/items');

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express(); //app initialisation and express is the constructor

app.use(cors()); //calling use function  
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/mern-simple-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.use('/api/items', itemRoutes);
