let data = require('../../Flight_Search.json');
let booking_data = require('../../booking_data.json');
let _ = require("lodash");
let fs = require("fs");
let uuid = require("uuid/v4")

exports.Booking = (req, res, next) => {

    let CustomerDetails = req.body;
    let input = _.toInteger(req.query.id_airport);
    let arrFound = _.find(data, { id_airport: input });
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
