const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', function(req, res) {
  res.sendFile(`${__dirname}/index.html`)
})

const port = 3000

app.listen(port, function() {
  console.log(`Server listening on port ${port}`)
})