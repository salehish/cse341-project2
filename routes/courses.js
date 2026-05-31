const router = require('express').Router();

const coursesController = require('../controllers/coursesController');

const ensureAuth = require('../middleware/ensureAuth');

// Public routes
router.get('/', coursesController.getAllCourses);
router.get('/:id', coursesController.getSingleCourse);

// Protected routes (require GitHub login)
router.post('/', ensureAuth, coursesController.createCourse);
router.put('/:id', ensureAuth, coursesController.updateCourse);
router.delete('/:id', ensureAuth, coursesController.deleteCourse);

module.exports = router;