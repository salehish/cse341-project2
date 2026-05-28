const router = require('express').Router();

const coursesController = require('../controllers/coursesController');

const authenticate = require('../middleware/authenticate');

router.get('/', coursesController.getAllCourses);

router.get('/:id', coursesController.getSingleCourse);

router.post('/', authenticate, coursesController.createCourse);

router.put('/:id', authenticate, coursesController.updateCourse);

router.delete('/:id', authenticate, coursesController.deleteCourse);

module.exports = router;