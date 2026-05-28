const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  address: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  major: {
    type: String,
    required: true
  },
  gpa: {
    type: Number,
    required: true
  },
  year: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Student', studentSchema);