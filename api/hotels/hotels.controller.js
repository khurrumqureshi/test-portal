const mongoose = require('mongoose');
const Hotels = mongoose.model('hotels');
const boom = require('boom');
let data = require("../../hotel_data.json");
let _ = require('lodash');

exports.searchfilter = (req, res, next) => {

    let input =  req.query.input1;
    //       input1 : req.query.input1,
    //      input2 : req.query.input2,
    //       input3 : req.query.input3,
    //       input4 : req.query.input4,
    //       input5 : req.query.input5,
    // };

        _.forEach(data,(value)=>{
            res.json(value);

        })

  //   switch (input)
  //  {
  //      case data.statusText:
      
  //          return console.log(  "in input 1");
          
  //      case data.payment.paymentMethod: 
  //         // return input == DATA.payment.paymentMethod;
  //         return console.log(  "in input 2");

  //      case data.paymentStatusText: 
  //         // return input == DATA.paymentStatusText;
  //         return console.log(  "in input 3");

  //      case data.contact.email: 
  //         // return input == DATA.contact.email;  
  //         return console.log(  "in input 4");

  //     case data.payment.type : 
  //         // return input == DATA.payment.type ;  
  //         return console.log(  "in input 5");

  //     default: 
  //         data
      
            
  //    }

//      let arrFound = _.filter(data, (DATA) => {

    


// });
};