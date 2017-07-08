
let data = require('../../Flight_Search.json');
let booking_data = require('../../booking_data.json');
let _ = require("lodash");
let fs = require("fs");



exports.Booking = (req, res, next) => {
    const FlightBooked = [];

    let CustomerDetails = (req.body);
    let input = _.toInteger(req.query.id_airport);
    let arrFound = _.find(data, { id_airport: input });


    FlightBooked.push({ "AirportId": arrFound.id_airport, "AirportName": arrFound.name });

    booking_data.push({ CustomerDetails, FlightBooked });


    let str = JSON.stringify(booking_data);
    fs.writeFile('booking_data.json', str, (err) => {

        if (err) {
            res.send(err)
        }
        else {

            res.send(booking_data);
        }
    })
}
