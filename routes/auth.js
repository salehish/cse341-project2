const router = require('express').Router();

const authController = require('../controllers/authController');

const passport = require('passport');

router.post('/register', authController.registerUser);

router.post('/login', authController.loginUser);

router.post('/logout', (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).json({ message: 'Error occurred while logging out' });
    }
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ message: 'Error occurred while destroying session' });
      }
      res.clearCookie('token');
      res.json({ message: 'Logged out successfully' });
    });
  });
});

router.get(
  '/github',
  passport.authenticate('github', { scope: ['user:email'] })
);

router.get(
  '/github/callback',
  passport.authenticate('github', {
    failureRedirect: '/'
  }),
  (req, res) => {
    res.json({
      message: 'GitHub login successful',
      user: req.user.username || req.user.displayName
    });
  }
);

module.exports = router;