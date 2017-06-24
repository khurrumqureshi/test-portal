let data = require("../../flight_data.json");
let _ = require('lodash');



exports.sorting = (req, res, next) => {

    let  newItem = [];
    let sortInput = req.query;

    // sorting for Total

    if(sortInput.query == "total") {
    let arrfound = _.sortBy(data, [(airport) => {
        if(sortInput.dir == "DESC") {
            return -(airport.totals.total);
        }
        else {
        return airport.totals.total;
        }
    }]);
    
    res.send(arrfound);
}

        // sorting for vendorStatus

    if(sortInput.query == "vendorstatus") {
        

         data.forEach(function(element) {
    
            element.products.forEach(function(element2) {

               newItem.push(element2)
            })

          
    });     
         newItem.sort((a, b) => {
              return a.vendorStatus > b.vendorStatus;
          });

            if(sortInput.dir == "DESC") { 
                
                _.reverse(newItem) }; 

          res.send(newItem);
        
    }   

    // sorting for officeId

     if(sortInput.query == "officeId") {
        

         data.forEach(function(element) {
    
            element.products.forEach(function(element2) {

               newItem.push(element2.additionalData)
            })

          
    });     
         newItem.sort((a, b) => {
              return a.officeId > b.officeId;
          });

            if(sortInput.dir == "DESC") { 
                
                _.reverse(newItem) }; 

          res.send(newItem);
        
    }   


};

