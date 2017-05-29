const mongoose = require('mongoose');
const Airports = mongoose.model('airports');
const boom = require('boom');

exports.search =(req, res, next) => {


}





// exports.createAirPort = (req, res, next) => {

//     let NewAirport = new Airports(req.body);

//     NewAirport.save ((err, airport) => {
//         if (err) {
//            next(boom.unauthorized(err.toString()));
//         }

//         else {
//             res.json(airport);

//         }
//     })};
