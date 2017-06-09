const mongoose = require('mongoose');
const Hotels = mongoose.model('hotels');
const boom = require('boom');
let data = require("../../hotel_data.json");
let _ = require('lodash');

exports.searchfilter = (req, res, next) => {

    let input = req.query.input,
         input2 = req.query.input2
          input3 = req.query.input3;
          input4 = req.query.input4;
          input5 = req.query.input5;

     var arrFound=  _.filter(data, (DATA) => {
  return (DATA.statusText == input) && ||
         DATA.paymentStatusText == input2 ||
         DATA.payment.paymentMethod == input3 ;
        //  DATA.contact.email == input4 &&
        //  DATA.payment.type == input5;
});

res.send(arrFound);


};