let data = require("../../flight_data.json");
let _ = require('lodash');


exports.sorting = (req, res, next) => {
    let sortInput = req.query;
    

    if (sortInput) {
        return res.send(data);
    }

    let arr = _.sortBy(data, [(a) => {


        var productA = _.find(a.products);

        if (sortInput.query == "total") {
            if (sortInput.dir == "desc") {
                return -(a.totals.total);

            }
            return a.totals.total;
        } else if (sortInput.query == "vendorstatus") {
            if (sortInput.dir == "desc") {
                return -(productA.vendorStatus);

            }

            return productA.vendorStatus;
        } else if (sortInput.query == "officeiId") {
            if (sortInput.dir == "desc") {
                return -(productA.additionalData.officeId);
            }

            return productA.additionalData.officeId;
        }
    }]);

    res.send(arr);
    


};

