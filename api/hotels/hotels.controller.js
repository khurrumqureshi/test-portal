let data = require("../../hotel_data.json");
let _ = require('lodash');

exports.sorting = (req, res, next) => {

    let newItem = [];
    let sortInput = req.query;

    if(req.query){
         return res.send(data);
    }



   data.sort((a, b) => {
          
 var productA = _.find(a.products, {type: 'hotel'});
            var productB = _.find(b.products, {type: 'hotel'});

            if(req.query.starRating){
if (sortInput.dir == "DESC") {
                return new Date(productsA.options.firstCancellationDate) - new Date(a.firstCancellationDate);
            } else {
                return new Date(a.firstCancellationDate) - new Date(b.firstCancellationDate);
            }
        }
        else if(req.query.firstCancellationDate){

        }
   });

        
        

    res.send(data);
    
}