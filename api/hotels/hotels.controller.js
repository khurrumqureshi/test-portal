let data = require("../../hotel_data.json");
let _ = require('lodash');

exports.sorting = (req, res, next) => {

    let newItem = [];
    let sortInput = req.query;

    //************** Total Sorting ************
    if (sortInput.query == "total") {
        let arrfound = _.sortBy(data, [(hotel) => {
            if (sortInput.dir == "DESC") {
                return -(hotel.totals.total);
            } else {
                return hotel.totals.total;
            }
        }]);

        res.send(arrfound);
    }
    //************** starRating Sorting ************
    if (sortInput.query == "rating") {

        let arrfound;

        data.forEach(function(hotel) {
            hotel.products.forEach(function(hotel2) {

                newItem.push(hotel2.options);

            });
        });
        newItem.sort((a, b) => {
            if (sortInput.dir == "DESC") {
                return b.starRating - a.starRating;
            } else {
                return a.starRating - b.starRating;
            }

        });

        res.send(newItem);

    }
    //************** firstCancellationDate Sorting ************

    if (sortInput.query == "canceldate") {

        let arrfound;

        data.forEach(function(hotel) {
            hotel.products.forEach(function(hotel2) {

                newItem.push(hotel2.options);

            });
        });
        newItem.sort((a, b) => {
            if (sortInput.dir == "DESC") {
                return new Date(b.firstCancellationDate) - new Date(a.firstCancellationDate);
            } else {
                return new Date(a.firstCancellationDate) - new Date(b.firstCancellationDate);
            }

        });

        res.send(newItem);
    }
}