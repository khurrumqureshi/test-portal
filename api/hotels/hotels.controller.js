const mongoose = require('mongoose');
const Hotels = mongoose.model('hotels');
const boom = require('boom');
const Datastore = require('nedb'), db = new Datastore({ filename: 'hotel_data.json' });

db.loadDatabase((err) => {
        if(!err){
            console.log("Database loaded");
        }
    });   

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
    
        res.send(db);

};