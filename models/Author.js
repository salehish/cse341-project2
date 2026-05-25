const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  nationality: String,
  age: Number,
  genre: String,
  booksPublished: Number,   
  favoriteGenre: String,
  awards: [String],
  active: Boolean
});

module.exports = mongoose.model('Author', authorSchema);