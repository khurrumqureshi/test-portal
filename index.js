const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const hotels = require('./api/hotels/hotels.model');
const port = 5000;

//body parser middleware
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use('/api', require('./api'));
