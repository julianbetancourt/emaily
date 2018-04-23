const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send({ bye: 'tjere' })
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log('started on port '))
