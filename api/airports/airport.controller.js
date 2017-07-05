let data = require("../../flight_data.json");
let _ = require('lodash');

exports.sorting = (req, res, next) => {

    let sortInput = req.query;

    
    let arr = _.sortBy(data, [(a) => {


        var productA = _.find(a.products);

        if (sortInput.query == "total") {
        
            return a.totals.total;
        } 
        
        else if (sortInput.query == "vendorStatus") {
    
        return productA.vendorStatus;
        }
        else if (sortInput.query == "officeId") {
    

            return productA.additionalData.officeId;
        }
    }]);

        if (sortInput.dir == "desc") {
            
         arr.reverse();

        } 

   
      res.send(arr);
     
}