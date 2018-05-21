const express = require('express')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const passport = require('passport')
const bodyParser = require('body-parser')
const keys = require('./config/keys')
require('./models/User')
require('./services/passport')

mongoose.connect(keys.mongoURI)

// App
const app = express()

// Body Parser
app.use(bodyParser.json())

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 1000, // 30 days in ms
    keys: [keys.cookieKey],
  })
)

app.use(passport.initialize())
app.use(passport.session())

// Auth Routes
require('./routes/authRoutes')(app)

// Billing Routes
require('./routes/billingRoutes')(app)

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js file, or main.css file
  app.use(express.static('client/build'))

  // Express will serve up the index.html file
  // if it doesnt recognize the route
  const path = require('path')
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

// Port
const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log('started on port '))
