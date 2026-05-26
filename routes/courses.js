const router = require('express').Router();

const coursesController = require('../controllers/coursesController');

router.get('/', coursesController.getAllCourses);

router.get('/:id', coursesController.getSingleCourse);

router.post('/', coursesController.createCourse);

router.put('/:id', coursesController.updateCourse);

router.delete('/:id', coursesController.deleteCourse);

module.exports = router;