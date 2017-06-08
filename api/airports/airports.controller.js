const mongoose = require('mongoose');
const Airports = mongoose.model('airports');
const boom = require('boom');
const fs = require('fs');
let data = JSON.parse(fs.readFileSync('Datastore.json' , 'utf8'));
// const Datastore = require('nedb');
//  let db = new Datastore({filename: data});

exports.search = (req, res, next) => {


let reqdata = req.query.data2;
 
 
                


              
                  

              
           
}

