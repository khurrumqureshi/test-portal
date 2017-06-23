let data = require("../../hotel_data.json");
    let _ = require('lodash');

    exports.sorting = (req, res, next) => {

    let  newItem = [];
    let sortInput = req.query;

    if(sortInput.query == "total") {
    let arrfound = _.sortBy(data, [(hotel) => {
        if(sortInput.dir == "DESC") {
            return -(hotel.totals.total);
        }
        else {
        return hotel.totals.total;
        }
    }]);
    
    res.send(arrfound);
    }

    if(sortInput.query == "rating") {
       console.log( _.sort(data, {products: [{options: { starRating: }}]}));

         
    }}