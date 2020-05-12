var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var aylien = require("aylien_textapi");
const bodyParser = require('body-Parser');

const dotenv = require('dotenv');
dotenv.config();


const textapi = new aylien({
    application_id:  `${process.env.API_ID}`,
    application_key:  `${process.env.API_KEY}`
  });


const app = express()



/* Middleware*/

app.use(bodyParser.urlencoded({extended: fasle}));
app.use(bodyParser.json());

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('dist/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
