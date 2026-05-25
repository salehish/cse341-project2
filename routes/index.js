const router = require('express').Router();

router.use('/books', require('./books'));
router.use('/authors', require('./authors'));

router.get('/', (req, res) => {
  res.send('Project 2 API Running');
});

module.exports = router;