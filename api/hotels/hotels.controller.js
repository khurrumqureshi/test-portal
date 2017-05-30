const mongoose = require('mongoose');
const Hotels = mongoose.model('hotels');
const boom = require('boom');

exports.search =(req, res, next) => {
    var search = req.query.data;

   // const regex = new RegExp(escapeRegex(data), 'gi');
    
    Hotels.find({ name : {$regex : "^"+search }},(err,data)=>{
        if(err) {
        next(boom.forbidden('No place Found'));}
        else{
    
        res.send(data);}
    });
    
};

// function escapeRegex(text) {
//     return text.replace(/([a-zA-Z]{2}[a-zA-Z]+)/g);
// };

///^([a-zA-Z]){2}([a-zA-Z])+$/g
