const Hotels = require('./api/hotels/hotels.model');
const boom = require('boom');

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