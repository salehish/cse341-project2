const router = require('express').Router();

const studentsController = require('../controllers/studentsController');

const ensureAuth = require('../middleware/ensureAuth');

// Public routes
router.get('/', studentsController.getAllStudents);
router.get('/:id', studentsController.getSingleStudent);

// Protected routes (require GitHub login)
router.post('/', ensureAuth, studentsController.createStudent);
router.put('/:id', ensureAuth, studentsController.updateStudent);
router.delete('/:id', ensureAuth, studentsController.deleteStudent);

module.exports = router;