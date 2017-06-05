const mongoose = require('mongoose');
const Hotels = mongoose.model('hotels');
const Boom = require('boom');

// Create Operation
exports.createHotel = (req, res, next) => {

    let NewHotel = new Hotels(req.body);

    NewHotel.save((err, hotel) => {
        if (err) {
            next(Boom.unauthorized(err.toString()));
        } else {
            res.json(hotel);

        }
    })
};

// Read Operation
exports.showHotel = (req, res, next) => {
    Hotels.find({})

        .then((hotels) => {
            res.send(`showing  ${hotels.length}  results \n ${ hotels}`);
        })

        .catch((err) => {
            next(Boom.notFound(err.toString()));
        });
};

// Update Operation
exports.updateHotel = (req, res, next) => {
    let updatehotel = req.body;
    Hotels.findOneAndUpdate({
            hotelId: req.params.hotelID
        }, updatehotel)

        .then((updatehotel) => {
            if (!updatehotel) {
                return next(Boom.forbidden("No hotel found"));
            }

            res.send("Hotel Updated");
        })

        .catch((err) => {

            next(Boom.forbidden("No hotel found"));
        })
};

// Delete Operation
exports.deleteHotel = (req, res, next) => {
    Hotels.findOneAndRemove({
            hotelId: req.body.id_hotel
        })

        .then((removedHotel) => {
            if (!removedHotel) {
                res.send("Invalid Hotel ID");
            } else {
                res.send(removedHotel.name + " removed from database")
            }
        });
};

// Search Operation
exports.search = (req, res, next) => {
    var search = req.query.data;

    if (search.length <= 2) {
        return next(Boom.badImplementation("Please provide atleast 3 letters to search"));
    }
    Hotels.find({
            name: {
                $regex: search,
                $options: 'i'
            }
        })
        .then((data) => {
            if (data.length === 0) {
                return next(Boom.forbidden('No such hotels found with this keyword found'));
            }
            res.send(data)
        })
        .catch((err) => {
            next(Boom.forbidden('No database connectivity found'));
        })

};