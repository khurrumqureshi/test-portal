let data = require("../../hotel_data.json");
let _ = require('lodash');

exports.sorting = (req, res, next) => {

    let newItem = [];
    let sortInput = req.query;

    if (sortInput) {
        return res.send(data);
    }

    let arr = _.sortBy(data, [(a) => {


        var productA = _.find(a.products, {
            type: 'hotel'
        });

        if (sortInput.query == "total") {
            if (sortInput.dir == "desc") {
                return -(a.totals.total);

            }
            return a.totals.total;
        } else if (sortInput.query == "starrating") {
            if (sortInput.dir == "desc") {
                return -(productA.options.starRating);

            }

            return productA.options.starRating;
        } else if (sortInput.query == "canceldate") {
            if (sortInput.dir == "desc") {
                return -(productA.options.firstCancellationDate);
            }

            return productA.options.firstCancellationDate;
        }
    }]);

    res.send(arr);

}