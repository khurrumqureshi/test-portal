const mongoose = require('mongoose');
const Hotels = mongoose.model('hotels');
const boom = require('boom');
let data = require("../../hotel_data.json");
let _ = require('lodash');

exports.searchfilter = (req, res, next) => {

    var map = req.query;
    var shouldFilter = !map.paymentMethod && !map.paymentStatusText;

    let newItems = [];
    if(!shouldFilter){
        data.map(hotel => {
            hotel._paymentMethod = !map.paymentMethod || _.toLower(map.paymentMethod) == _.toLower(hotel.payment.paymentMethod);
            hotel._paymentStatusText = !map.paymentStatusText || _.toLower(map.paymentStatusText) == _.toLower(hotel.paymentStatusText);

            hotel._visible = hotel._paymentMethod && hotel._paymentStatusText;
            if(hotel._visible) newItems.push(hotel);
        });

        res.send(newItems);
    }
    else{
        res.send(data);
    }
};
