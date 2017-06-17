const boom = require('boom');
let data = require('../../flight_data.json');




exports.searchfilter = (req, res, next) => {

let data = require("../../flight_data.json");
let _ = require('lodash');

exports.searchfilter = (req, res, next) => {

    var map = req.query;
    var shouldFilter = !map.paymentMethod && 
    !map.paymentStatusText && 
    !map.statusText && 
    !map.email &&
    !map.type &&
    !map.createdAtfrom && !map.createdAtto
    ;

    let newItems = [];
    if(!shouldFilter){
        data.filter(airport => {
            airport._paymentMethod = !map.paymentMethod || _.toLower(map.paymentMethod) == _.toLower(airport.payment.paymentMethod);
            airport._paymentStatusText = !map.paymentStatusText || _.toLower(map.paymentStatusText) == _.toLower(airport.paymentStatusText);
            airport._statusText = !map.statusText || _.toLower(map.statusText) == _.toLower(airport.statusText);
            airport._email = !map.email || _.toLower(map.email) == _.toLower(airport.contact.email);
            airport._type = !map.type || _.toLower(map.type) == _.toLower(airport.payment.type);
            airport._createdAt = !map.createdAtfrom && !map.createdAtto || airport.createdAt >= map.createdAtfrom && airport.createdAt <= map.createdAtto;

            airport._visible = airport._paymentMethod && 
            airport._paymentStatusText &&  
            airport._statusText &&  
            airport._email &&
            airport._type &&
            airport._createdAt ;
            if(airport._visible) newItems.push(airport);
        });

        res.send(newItems);
    }
    else{
        res.send(data);
    }
};

}
