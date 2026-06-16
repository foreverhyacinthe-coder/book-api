# Mugisha's Bookstore API

A simple Express.js API for managing books in Mugisha's bookstore.

## Installation

```bash
npm install
```

## Usage

1. Create a `.env` file with the following content:
   ```
   MONGO_URI=mongodb://localhost:27017/bookstore
   PORT=3000
   ```

2. Make sure MongoDB is running locally

3. Start the server:
   ```bash
   node index.js
   ```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/books | Add a new book |
| GET | /api/books | Get all books |
| GET | /api/books/:id | Get a book by ID |
| PUT | /api/books/:id | Update a book |
| DELETE | /api/books/:id | Delete a book |

## Book Schema

- title (string, required)
- author (string, required)
- price (number, required)