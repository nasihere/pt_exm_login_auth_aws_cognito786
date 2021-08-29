const express = require('express')
const app = express()
const port = 3000
require('./routes')(app);


app.get('/', (req, res) => {
  res.send('Welcome to the project')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})