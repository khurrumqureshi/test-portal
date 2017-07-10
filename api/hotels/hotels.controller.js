let data = require("../../hotel_data.json");
let booking_data = require("../../booking_data.json")
let _ = require('lodash');
let fs = require("fs");
 var shortid = require('shortid');

exports.booking = (req, res, next) => {

    let CustomerDetails = req.body;
    let input = req.query.hotelId;
    let arrFound = _.find(data, {
        hotelId: input
    });
 

    if (!CustomerDetails.FirstName || !CustomerDetails.LastName || !CustomerDetails.ContactNo || !CustomerDetails.NIC || !CustomerDetails.BookedFor) {
        return res.send("Please fill out all fields");
    }

    let HotelData = ({
        "HotelId": arrFound.hotelId,
        "HotelName": arrFound.name
    });
    CustomerDetails.Id = shortid.generate();
    CustomerDetails.Hotel = HotelData;
    CustomerDetails.BookedFor = new Date(CustomerDetails.BookedFor);
    booking_data.push(CustomerDetails);


    let str = JSON.stringify(booking_data);
    fs.writeFile('booking_data.json', str, (err) => {

        if (err) {
            res.send(err)
        } else {

            res.send("Mr " + CustomerDetails.FirstName + " " + CustomerDetails.LastName + " Your hotel for " + arrFound.name + " is booked for the Date: " + CustomerDetails.BookedFor);
        }
    })
}