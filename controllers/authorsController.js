const Author = require('../models/Author');
const validator = require('validator');

// GET all authors
const getAllAuthors = async (req, res) => {
  try {
    const authors = await Author.find();

    res.status(200).json(authors);

  } catch (err) {

    res.status(500).json({
      message: err.message
    });
  }
};

// GET single author
const getSingleAuthor = async (req, res) => {
  try {

    const author = await Author.findById(req.params.id);

    if (!author) {
      return res.status(404).json({
        message: 'Author not found'
      });
    }

    res.status(200).json(author);

  } catch (err) {

    res.status(500).json({
      message: err.message
    });
  }
};

// CREATE author
const createAuthor = async (req, res) => {
  try {

    const {
      firstName,
      lastName,
      email,
      nationality,
      age,
      genre,
      booksPublished
    } = req.body;

    // Validation
    if (
      !firstName ||
      !lastName ||
      !email ||
      !nationality ||
      !age ||
      !genre ||
      booksPublished === undefined
    ) {
      return res.status(400).json({
        message: 'All fields are required'
      });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({
        message: 'Invalid email'
      });
    }

    const author = new Author({
      firstName,
      lastName,
      email,
      nationality,
      age,
      genre,
      booksPublished
    });

    const savedAuthor = await author.save();

    res.status(201).json(savedAuthor);

  } catch (err) {

    res.status(500).json({
      message: err.message
    });
  }
};

// UPDATE author
const updateAuthor = async (req, res) => {
  try {

    const updatedAuthor = await Author.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedAuthor) {
      return res.status(404).json({
        message: 'Author not found'
      });
    }

    res.status(200).json(updatedAuthor);

  } catch (err) {

    res.status(500).json({
      message: err.message
    });
  }
};

// DELETE author
const deleteAuthor = async (req, res) => {
  try {

    const deletedAuthor = await Author.findByIdAndDelete(req.params.id);

    if (!deletedAuthor) {
      return res.status(404).json({
        message: 'Author not found'
      });
    }

    res.status(200).json({
      message: 'Author deleted successfully'
    });

  } catch (err) {

    res.status(500).json({
      message: err.message
    });
  }
};

module.exports = {
  getAllAuthors,
  getSingleAuthor,
  createAuthor,
  updateAuthor,
  deleteAuthor
};
