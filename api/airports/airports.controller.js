const boom = require('boom');
let data = require('../../flight_data.json');




exports.searchfilter = (req, res, next) => {


let reqdata1 = req.query.input;
// let reqdata2 = req.query.contactEmail;
// let reqdata3 = req.query.paymentStatusText;
// let reqdata4 = req.query.paymentPaymentMethod;
// let reqdata5 = req.query.paymentType;
// let reqdata6 = new Date(req.query.from);
// let reqdata7 = new Date(req.query.to);

 let filterData = data.filter((el) => {
    
    
    switch (reqdata1)
   {
       case el.contact.email: 
           
          reqdata1 == el.contact.email;
          return;

          default:
          console.log("Nothing baby");
         
     }
    


   });

  //   switch (reqdata1)
  //  {
  //      case statusText:
  //      res.send("hello")
  //      break;
  //      case "Hi":
  //      res.send("Hi");
  //      break;

  //      default:

  //      res.send("Bye")
         
  //    }

 res.send(filterData)
}
