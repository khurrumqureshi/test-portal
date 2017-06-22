let data = require("../../hotel_data.json");
    let _ = require('lodash');

    exports.sorting = (req, res, next) => {

    let sortInput = req.query;

    if(sortInput.query == "total") {
    let arrfound = _.sortBy(data, [(o) => {
        if(sortInput.dir == "DESC") {
            return -(o.totals.total);
        }
        else {
        return o.totals.total;
        }
    }]);
    
    res.send(arrfound);
    }

    if(sortInput.query == "rating") {
        for(let i=0; i< data.length; i++){
            console.log(data[i].products)
        }
      
}
  
};