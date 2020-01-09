const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')

const app = express()
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', function(req, res) {
  res.sendFile(`${__dirname}/index.html`)
})

app.post('/', function(req, res) {
  const baseURL = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/'
  const { crypto, fiat } = req.body;
  const requestURL = baseURL + crypto + fiat

  request(requestURL, function(error, response, body) {
    const data = JSON.parse(body)
    const price = data.last
    
    res.send(`<h1>The price of ${crypto} is currently ${price} ${fiat}.</h1>`)
  })
})

const port = 3000

app.listen(port, function() {
  console.log(`Server listening on port ${port}`)
})