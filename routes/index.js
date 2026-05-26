const router = require('express').Router();

router.use('/students', require('./students'));

router.use('/courses', require('./courses'));

router.get('/', (req, res) => {
  res.send('Project 2 API Running');
});

module.exports = router;