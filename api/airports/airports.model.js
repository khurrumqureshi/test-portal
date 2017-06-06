const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let airport_data = new Schema({

    id_airport: { type: Number},
    iata: {type: String},
    name: { type: String    },
    continent_code: { type: String    },
    continent_name: { type: String    },
    region_name: { type: String    },
    priority: { type: Number   },
    main_city_code: { type: String    }

});

module.exports = mongoose.model('airports', airport_data);


