const boom = require('boom');
let data = require('../../flight_data.json');




exports.searchfilter = (req, res, next) => {


let reqdata1 = req.query.statusText;
let reqdata2 = req.query.contactEmail;
let reqdata3 = req.query.paymentStatusText;
let reqdata4 = req.query.paymentPaymentMethod;
let reqdata5 = req.query.paymentType;
let reqdata6 = new Date(req.query.from);
let reqdata7 = new Date(req.query.to);

 let filterData = data.filter((el) => {
    
     return el.paymentStatusText  == reqdata3 &&     
      el.contact.email == reqdata2 &&
      el.statusText == reqdata1;

     
 });
    
  res.send(filterData)


}
