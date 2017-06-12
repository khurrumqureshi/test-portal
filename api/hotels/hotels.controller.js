const mongoose = require('mongoose');
const Hotels = mongoose.model('hotels');
const boom = require('boom');
let data = require("../../hotel_data.json");
let _ = require('lodash');

exports.searchfilter = (req, res, next) => {

    let input = req.query.input;
        //  input2 = req.query.input2
        //   input3 = req.query.input3;
        //   input4 = req.query.input4;
        //   input5 = req.query.input5;

    switch (input)
   {
       case DATA.statusText:
            return input == DATA.statusText;

       case DATA.payment.paymentMethod: 
          return input == DATA.payment.paymentMethod;

       case DATA.paymentStatusText: 
          return input == DATA.paymentStatusText;

       case DATA.contact.email: 
          return input == DATA.contact.email;  

      case DATA.payment.type : 
          return input == DATA.payment.type ;  

      default: 
          DATA
      
            
     }

//      let arrFound = _.filter(data, (DATA) => {

    


// });

res.send(input);

};