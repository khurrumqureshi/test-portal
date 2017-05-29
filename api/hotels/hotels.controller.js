const mongoose = require('mongoose');
const Hotels = mongoose.model('hotels');
const boom = require('boom');

// exports.createHotel = (req, res, next) => {

//     let NewHotel = new Hotels(req.body);

//     NewHotel.save ((err, hotel) => {
//         if (err) {
//            next(boom.unauthorized(err.toString()));
//         }

//         else {
//             res.json(hotel);

//         }
//     })};


exports.search =(req, res, next) => {


}