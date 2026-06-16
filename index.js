const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/bookstore')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Book model
const Book = mongoose.model('Book', {
  title: { type: String, required: true },
  author: { type: String, required: true },
  price: { type: Number, required: true }
});

// POST /api/books - add a new book
app.post('/api/books', async (req, res) => {
  try {
    const book = new Book(req.body);
    const savedBook = await book.save();
    res.json(savedBook);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET /api/books - return all books
app.get('/api/books', async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

// GET /api/books/:id - return one book by ID
app.get('/api/books/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ error: 'Book not found' });
    res.json(book);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT /api/books/:id - update a book
app.put('/api/books/:id', async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!book) return res.status(404).json({ error: 'Book not found' });
    res.json(book);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE /api/books/:id - delete a book
app.delete('/api/books/:id', async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) return res.status(404).json({ error: 'Book not found' });
    res.json({ message: 'Book deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});