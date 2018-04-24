const express = require('express')
const mongoose = require('mongoose')
const keys = require('./config/keys')
require('./services/passport')

mongoose.connect(keys.mongoURI)

// App
const app = express()

// Auth Routes
require('./routes/authRoutes')(app)

// Port
const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log('started on port '))
