const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const keys = require('../config/keys')

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email'],
    })
  )

  app.get('/auth/google/callback', passport.authenticate('google'))
}
