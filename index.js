const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const airports = require('./api/airports/airports.model');
const hotels = require('./api/hotels/hotels.model');

let config =  require('config');
require('dotenv').config();


mongoose.Promise = require('bluebird');

console.log(config.get(PORT));



//Connect to mongodb
mongoose.connect(process.env.MONGODB)
//connection and error checking
.then(
    (success) =>{
        console.log("Connection has been made");
    }
)
.catch(
    (error) => {
        console.log("Connection Error:",error)
    }
);

//body parser middleware
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use('/api', require('./api'));

app.listen(config.get(PORT) , () => {
    console.log(`Running server on ${config.get(PORT)}`);
});

app.use((err, req, res,next) => {
    res.status(err.output.payload.statusCode).send(err.message);
});
