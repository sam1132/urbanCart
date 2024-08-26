import express from 'express';
import passport from '../config/passport.config.js'; 
import jwt from 'jsonwebtoken'
const router = express.Router();
const secret = process.env.SECRET_key
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/signin' }), (req, res) => {
    const token = jwt.sign({ id: req.user._id }, secret, { expiresIn: '1h' });
    res.redirect(`https://urbancart-b989.onrender.com/auth/google/callback?token=${token}`);});

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('https://urbancart12.netlify.app/signin');
});

export default router;
