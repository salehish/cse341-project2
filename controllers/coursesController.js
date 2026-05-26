const mongoose = require('mongoose');
const Course = require('../models/courses');

// Get all courses
const getAllCourses = async (req, res) => {
  try {

    const courses = await Course.find();

    res.status(200).json(courses);

  } catch (err) {

    res.status(500).json({
      message: err.message
    });
  }
};

// Get single course
const getSingleCourse = async (req, res) => {
  try {

    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        message: 'Invalid ID'
      });
    }

    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({
        message: 'Course not found'
      });
    }

    res.status(200).json(course);

  } catch (err) {

    res.status(500).json({
      message: err.message
    });
  }
};

// Create course
const createCourse = async (req, res) => {
  try {

    const {
      courseName,
      courseCode,
      instructor,
      credits
    } = req.body;

    // Validation
    if (
      !courseName ||
      !courseCode ||
      !instructor ||
      !credits
    ) {
      return res.status(400).json({
        message: 'All fields are required'
      });
    }

    const course = new Course({
      courseName,
      courseCode,
      instructor,
      credits
    });

    const savedCourse = await course.save();

    res.status(201).json(savedCourse);

  } catch (err) {

    res.status(500).json({
      message: err.message
    });
  }
};

// Update course
const updateCourse = async (req, res) => {
  try {

    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        message: 'Invalid ID'
      });
    }

    const updatedCourse = await Course.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedCourse) {
      return res.status(404).json({
        message: 'Course not found'
      });
    }

    res.status(200).json(updatedCourse);

  } catch (err) {

    res.status(500).json({
      message: err.message
    });
  }
};

// Delete course
const deleteCourse = async (req, res) => {
  try {

    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        message: 'Invalid ID'
      });
    }

    const deletedCourse = await Course.findByIdAndDelete(req.params.id);

    if (!deletedCourse) {
      return res.status(404).json({
        message: 'Course not found'
      });
    }

    res.status(200).json({
      message: 'Course deleted successfully'
    });

  } catch (err) {

    res.status(500).json({
      message: err.message
    });
  }
};

module.exports = {
  getAllCourses,
  getSingleCourse,
  createCourse,
  updateCourse,
  deleteCourse
};