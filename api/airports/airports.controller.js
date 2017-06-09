const mongoose = require('mongoose');
const Airports = mongoose.model('airports');
const boom = require('boom');
const fs = require('fs');
let data = require('../../Datastore.json');


exports.searchfilter = (req, res, next) => {


let reqdata1 = req.query.statusText;
let reqdata2 = req.query.contactEmail;
let reqdata3 = req.query.paymentStatusText;    ;
let reqdata4 = req.query.paymentPaymentMethod;
let reqdata5 = req.query.paymentType;
let reqdata6 = new Date(req.query.from);
let reqdata7 = new Date(req.query.to);

 let filterData = data.filter((el) => {
    
    return el.statusText == reqdata1 ||
           el.contact.email == reqdata2 ||
           el.paymentStatusText  == reqdata3 ||
           el.payment.paymentMethod == reqdata4 ||
           el.payment.type ==  reqdata5 ||
           el.products.createdAt >=  reqdata5 &&
        el.products.createdAt <=  reqdata5;
 });


                
       res.send(filterData);
                  

              
           
}

