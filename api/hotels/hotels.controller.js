const mongoose = require('mongoose');
const Hotels = mongoose.model('hotels');
const boom = require('boom');

exports.search = (req, res, next) => {
    var search = req.query.data;

    if (search.length <= 2) {
        next(boom.badImplementation("Please provide atleast 3 letters to search"));
    } else {
        Hotels.find({
                name: {
                    $regex: search,
                    $options: 'i'
                }
            })
            .then((data) => {
                if (data.length === 0) {
                    next(boom.forbidden('No such hotels found with this keyword found'));
                } else {
                    res.send(data)
                }
            })
            .catch((err) => {
                next(boom.forbidden('No database connectivity found'));
            })
    }
};