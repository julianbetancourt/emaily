const express = require('express')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const passport = require('passport')
const keys = require('./config/keys')
require('./models/User')
require('./services/passport')

mongoose.connect(keys.mongoURI)

// App
const app = express()

app.use(cookieSession({
  maxAge: 30 * 24 * 60 * 1000, // 30 days in ms
  keys: [keys.cookieKey]
}))

app.use(passport.initialize())
app.use(passport.session())

// Auth Routes
require('./routes/authRoutes')(app)

// Port
const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log('started on port '))
