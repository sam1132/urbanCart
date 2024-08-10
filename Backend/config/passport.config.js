import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import User from '../Model/user.model.js'; 
import dotenv from 'dotenv'
dotenv.config()
passport.use(new GoogleStrategy({
  clientID: process.env.CLIENTIDG,
  clientSecret: process.env.CLIENTIDSG,
  callbackURL: 'http://localhost:4000/auth/google/callback',
}, async (accessToken, refreshToken, profile, done) => {
  try {
    let user = await User.findOne({ googleId: profile.id });
    if (!user) {
      user = new User({
        googleId: profile.id,
        username: profile.displayName,
        email: profile.emails[0].value,
      });
      await user.save();
    }
    return done(null, user);
  } catch (err) {
    return done(err, null);
  }
}));
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

export default passport;
