const express = require('express');
const mongoose = require('mongoose');
const booksRoutes = require('./routes/books');

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/bookstore')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
app.use('/api/books', booksRoutes);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});