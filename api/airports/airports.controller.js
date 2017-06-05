const mongoose = require('mongoose');
const Airports = mongoose.model('airports');
const boom = require('boom');

exports.search = (req, res, next) => {

    let search = req.query.data;


    if (search.length <= 2) {
       return next(boom.badImplementation("Please provide atleast 3 letters to search"));
    } 

        Airports.find().or([{'name' : {$regex: search, $options: 'i'}}, {'iata': {$regex: search, $options: 'i'}}]).exec()

            .then((doc) => {
                if (doc.length === 0) {

                    return next(boom.badImplementation("no such airport with keyword " + search + " found"));
                }
                
                res.send(doc);
               
            })
            .catch((err) => {

                next(boom.badImplementation(err.toString()));

            });



};


exports.createAirPort = (req, res, next) => {

    let NewAirport = new Airports(req.body);

    NewAirport.save ((err, airport) => {
        if (err) {
           next(boom.unauthorized(err.toString()));
        }

        else {
            res.json(airport);

        }
    })};

exports.readAirport = (req, res) => {

    Airports.find({})
      
        .then((airports) => {
        
              res.send(airports);})

        .catch((err) => {
          next(boom.notFound(err.toString()));});


}

exports.updateAirport = (req, res, next) => {

       let updateThis = req.body;
    Airports.findOneAndUpdate({id_airport: req.params.airID}, updateThis)
    
    .then((updated) => {

        if(!updated) {

     return res.send("Airport not updated")
        }
         res.send("Airport updated")
        })
    
    .catch((err) => {

     next(boom.forbidden(err.toString())); 
    
     });
}

exports.deleteAirport = (req, res) => {
   Airports.findOneAndRemove({id_airport: req.body.id_airport})
    
       .then((removedAirport) => {
          if(!removedAirport) {
          res.send("Invalid Airport ID");
          }
          else {
            res.send(removedAirport.name +" removed from database")
          }
    });
    
}