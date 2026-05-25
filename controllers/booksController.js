const Book = require('../models/Book');
const validator = require('validator');

// Get all books
const getAllBooks = async (req, res) => {
  try {

    const books = await Book.find();

    res.status(200).json(books);

  } catch (err) {

    res.status(500).json({
      message: err.message
    });
  }
};

// Get single book
const getSingleBook = async (req, res) => {
  try {

    const book = await Book.findById(req.params.id);

    if (!book) {
      return res.status(404).json({
        message: 'Book not found'
      });
    }

    res.status(200).json(book);

  } catch (err) {

    res.status(500).json({
      message: err.message
    });
  }
};

// Create book
// Create book
const createBook = async (req, res) => {
  try {

    const {
      title,
      author,
      genre,
      publishedYear,
      pages,
      price,
      language
    } = req.body;

    // Validation
    if (
      !title ||
      !author ||
      !genre ||
      !publishedYear ||
      !pages ||
      !price ||
      !language
    ) {
      return res.status(400).json({
        message: 'All fields are required'
      });
    }

    const book = new Book({
      title,
      author,
      genre,
      publishedYear,
      pages,
      price,
      language
    });

    const savedBook = await book.save();

    res.status(201).json(savedBook);

  } catch (err) {

    res.status(500).json({
      message: err.message
    });
  }
};

// Update Book
const updateBook = async (req, res) => {
  try {

    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedBook) {
      return res.status(404).json({
        message: 'Book not found'
      });
    }

    res.status(200).json(updatedBook);

  } catch (err) {

    res.status(500).json({
      message: err.message
    });
  }
};

// Delete Book
const deleteBook = async (req, res) => {
  try {

    const deletedBook = await Book.findByIdAndDelete(req.params.id);

    if (!deletedBook) {
      return res.status(404).json({
        message: 'Book not found'
      });
    }

    res.status(200).json({
      message: 'Book deleted successfully'
    });

  } catch (err) {

    res.status(500).json({
      message: err.message
    });
  }
};

module.exports = {
  getAllBooks,
  getSingleBook,
  createBook,
  updateBook,
  deleteBook
};