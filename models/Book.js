const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  genre: String,
  publishedYear: Number,
  pages: Number,
  publisher: String,
  email: String
});

module.exports = mongoose.model('Book', bookSchema);