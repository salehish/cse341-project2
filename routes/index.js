const router = require('express').Router();

router.use('/students', require('./students'));

router.use('/courses', require('./courses'));

router.use('/auth', require('./auth'));

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Project 2 API Running' });
});

module.exports = router;