let data = require("../../flight_data.json");
let data2 = require('../../Flight_Search.json');
let booking_data = require('../../booking_data.json');
let _ = require("lodash");
let fs = require("fs");
let uuid = require("uuid/v4");



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
    if (!shouldFilter) {
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
                airport._createdAt;
            if (airport._visible) newItems.push(airport);
        });

        res.send(newItems);
    }
    else {
        res.send(data);
    }


}


exports.Booking = (req, res, next) => {

    let CustomerDetails = req.body;
    let input = _.toInteger(req.query.id_airport);
    let arrFound = _.find(data2, { id_airport: input });
    CustomerDetails._id = uuid();



    if (!CustomerDetails.Firstname || !CustomerDetails.Lastname || !CustomerDetails.ContactNo || !CustomerDetails.NIC || !CustomerDetails.BookedFor) {

        return res.send("Please fill out all the fields");
    }
    let AirportData = ({ "AirportId": arrFound.id_airport, "AirportName": arrFound.name });

    CustomerDetails.Flight = AirportData;
    CustomerDetails.BookedFor = new Date(CustomerDetails.BookedFor);

    booking_data.push(CustomerDetails);


    let str = JSON.stringify(booking_data);
    fs.writeFile('booking_data.json', str, (err) => {

        if (err) {
            res.send(err)
        }
        else {

            res.send("Thanks ! " + CustomerDetails.Firstname + " your Flight to " + arrFound.name + " has been booked for " + CustomerDetails.BookedFor);
        }
    })
}
