const express = require('express')
const app = express()

// Traditional Get API
app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

// Rest API
app.get('/rest', (req, res) => {
    res.json({name: "Alan", age: 21, group: "MIT"})
  })

app.listen(3000, () => {
  console.log(`Backend server is running on port 3000`)
})
