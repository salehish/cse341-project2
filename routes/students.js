const router = require('express').Router();

const studentsController = require('../controllers/studentsController');

const authenticate = require('../middleware/authenticate');

router.get('/', studentsController.getAllStudents);

router.get('/:id', studentsController.getSingleStudent);

router.post('/', authenticate, studentsController.createStudent);

router.put('/:id', authenticate, studentsController.updateStudent);

router.delete('/:id', authenticate, studentsController.deleteStudent);



module.exports = router;