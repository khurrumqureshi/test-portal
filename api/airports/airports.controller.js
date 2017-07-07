
let data = require('../../Flight_Search.json');
let user_data = require('../../user_data.json');
let _ = require("lodash");
let fs = require("fs");


  const newArray = [];
 exports.Booking = (req, res, next) => {

    // let found = false;
   let input =   _.toInteger(req.body.id_airport);
   let arrFound =  _.find(data, {id_airport: input});

   let saad = fs.readFileSync('user_data.json');
 
  
   let ahsan = _.toArray(saad);
   ahsan.push(arrFound);
       
    let jadff = JSON.stringify(ahsan);

     fs.appendFile('user_data.json',ahsan, (err) => {
    
    if(err) 
    {
        res.send(err)
    }
    else {  

        res.send(user_data);
    }
  })
}
