const mongoose = require('mongoose');
const Hotels = mongoose.model('hotels');
const boom = require('boom');
let data = require("../../hotel_data.json");
let _ = require('lodash');

exports.searchfilter = (req, res, next) => {

    var map = req.query;
    var shouldFilter = !map.paymentMethod && !map.paymentStatusText;

    let newItems = [];
    if(shouldFilter){
        data.map(hotel => {
            hotel._paymentMethod = !map.paymentMethod || map.paymentMethod == hotel.payment.paymentMethod;
            hotel._paymentStatusText = !map.paymentStatusText || map.paymentStatusText == hotel.paymentStatusText;

            hotel._visible = hotel._paymentMethod && hotel._paymentStatusText;
            if(hotel._visible) newItems.push(hotel);
        });

        return newItems;
    }
    else{
        res.send(data);
    }
};
