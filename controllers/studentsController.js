const mongoose = require('mongoose');
const Student = require('../models/students');
const validator = require('validator');

// Get all students
const getAllStudents = async (req, res) => {
  try {

    const students = await Student.find();

    res.status(200).json(students);

  } catch (err) {

    res.status(500).json({
      message: err.message
    });
  }
};

// Get single student by ID
const getSingleStudent = async (req, res) => {
  try {

    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        message: 'Invalid ID'
      });
    }

    const student = await Student.findById(req.params.id);

    if (!student) {
      return res.status(404).json({
        message: 'Student not found'
      });
    }

    res.status(200).json(student);

  } catch (err) {

    res.status(500).json({
      message: err.message
    });
  }
};

// Create student
const createStudent = async (req, res) => {
  try {

    const {
      firstName,
      lastName,
      email,
      address,
      phone,
      major,
      gpa,
      year
    } = req.body;

    // Validation
    if (
      !firstName ||
      !lastName ||
      !email ||
      !address ||
      !phone ||   
      !major ||
      !gpa ||
      !year
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

    const student = new Student({
      firstName,
      lastName,
      email,
      address,
      phone,
      major,
      gpa,
      year
    });

    const savedStudent = await student.save();

    res.status(201).json(savedStudent);

  } catch (err) {

    res.status(500).json({
      message: err.message
    });
  }
};

// Update student
const updateStudent = async (req, res) => {
  try {

    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        message: 'Invalid ID'
      });
    }

    const updatedStudent = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedStudent) {
      return res.status(404).json({
        message: 'Student not found'
      });
    }

    res.status(200).json(updatedStudent);

  } catch (err) {

    res.status(500).json({
      message: err.message
    });
  }
};

// Delete student
const deleteStudent = async (req, res) => {
  try {

    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        message: 'Invalid ID'
      });
    }

    const deletedStudent = await Student.findByIdAndDelete(req.params.id);

    if (!deletedStudent) {
      return res.status(404).json({
        message: 'Student not found'
      });
    }

    res.status(200).json({
      message: 'Student deleted successfully'
    });

  } catch (err) {

    res.status(500).json({
      message: err.message
    });
  }
};

module.exports = {
  getAllStudents,
  getSingleStudent,
  createStudent,
  updateStudent,
  deleteStudent
};