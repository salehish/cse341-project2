const router = require('express').Router();

const {
  getAllAuthors,
  getSingleAuthor,
  createAuthor,
  updateAuthor,
  deleteAuthor
} = require('../controllers/authorsController');

// Get all authors
router.get('/', getAllAuthors);

// Get single author
router.get('/:id', getSingleAuthor);

// Post new author
router.post('/', createAuthor);

// Put update author
router.put('/:id', updateAuthor);

// Delete author
router.delete('/:id', deleteAuthor);

module.exports = router;