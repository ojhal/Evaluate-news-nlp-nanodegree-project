const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const cors = require('cors');
const bodyParser = require("body-parser")


var aylien = require("aylien_textapi");

var textapi = new aylien({
    application_id:  process.env.API_ID,
    application_key: process.env.API_KEY
  });

  textapi.sentiment({
    'url': 'https://api.aylien.com/api/v1'
  }, function(error, response) {
    if (error === null) {
      console.log("Mera h =>",response);
    }
  });

const app = express()



/* Middleware*/
app.use(cors())  

app.use(bodyParser.urlencoded({extended: false }))
app.use(bodyParser.json())

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
