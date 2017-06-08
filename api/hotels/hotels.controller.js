const mongoose = require('mongoose');
const Hotels = mongoose.model('hotels');
const boom = require('boom');
let fs = require('fs');
var fsdata  ;
const Datastore = require('nedb');



exports.search = (req, res, next) => {
    var search = req.query.data;

    if (search.length <= 2) {
       return next(boom.badImplementation("Please provide atleast 3 letters to search"));
    } 
        Hotels.find({
                name: {
                    $regex: search,
                    $options: 'i'
                }
            })
            .then((data) => {
                if (data.length === 0) {
                   return next(boom.forbidden('No such hotels found with this keyword found'));
                }  
                    res.send(data)
            })
            .catch((err) => {
                next(boom.forbidden('No database connectivity found'));
            })
    
};

exports.searchfs = (req, res, next) => {
let reqdata = req.query.data;

    fsdata = JSON.parse(fs.readFileSync('hotel_data.json', 'utf8'));

     var arrFound = fsdata.filter(function(item) {
        
  return item.payment.paymentMethod === reqdata;
  
});

         console.log(arrFound.length);


res.send(arrFound);



//     let db = new Datastore( );

//    res.send(JSON.stringify(db));

};