const mongoose = require('mongoose');
const Hotels = mongoose.model('hotels');
const boom = require('boom');
let data = require("../../hotel_data.json");
let _ = require('lodash');

exports.searchfilter = (req, res, next) => {

    var map = req.query;
    var shouldFilter = !map.paymentMethod && 
    !map.paymentStatusText && 
    !map.statusText && 
    !map.email &&
    !map.type &&
    !map.createdAtto && !map.createdAtfrom
    ;

    let newItems = [];
    if(!shouldFilter){
        data.filter(hotel => {
            hotel._paymentMethod = !map.paymentMethod || _.toLower(map.paymentMethod) == _.toLower(hotel.payment.paymentMethod);
            hotel._paymentStatusText = !map.paymentStatusText || _.toLower(map.paymentStatusText) == _.toLower(hotel.paymentStatusText);
            hotel._statusText = !map.statusText || _.toLower(map.statusText) == _.toLower(hotel.statusText);
            hotel._email = !map.email || _.toLower(map.email) == _.toLower(hotel.contact.email);
            hotel._type = !map.type || _.toLower(map.type) == _.toLower(hotel.payment.type);
            hotel._createdAt = !map.createdAtto && !map.createdAtfrom || map.createdAtto && map.createdAtfrom

            hotel._visible = hotel._paymentMethod && 
            hotel._paymentStatusText &&  
            hotel._statusText &&  
            hotel._email &&
            hotel._type ;
            if(hotel._visible) newItems.push(hotel);
        });

        res.send(newItems);
    }
    else{
        res.send(data);
    }
};
