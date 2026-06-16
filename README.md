# Mugisha's Bookstore API

A simple Express.js API for managing books with MongoDB.

## Installation

```bash
npm install
```

## Setup

Create `.env` file (or rename `.env.example`):
```
MONGO_URI=mongodb://localhost:27017/bookstore
PORT=3000
```

Make sure MongoDB is running on localhost:27017.

## Run

```bash
node index.js
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/books | Create a book (title, author, price required) |
| GET | /api/books | Get all books |
| GET | /api/books/:id | Get a book by ID |
| PUT | /api/books/:id | Update a book |
| DELETE | /api/books/:id | Delete a book (returns 404 if not found) |

## Project Structure

```
├── index.js          # Main server
├── models/
│   └── Book.js       # Book schema
├── routes/
│   └── books.js      # Book routes
├── .env              # Environment variables (not tracked)
├── .env.example      # Example env file
├── .gitignore
└── package.json
```

## Book Schema

- title (string, required)
- author (string, required)
- price (number, required)