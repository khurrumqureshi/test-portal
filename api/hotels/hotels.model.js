const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let HotelShcema = new Schema({

    name: { type: String },
    name_en: { type: String    },
    hotelCount: { type: Number    },
    displayType: { type: String    },
    countryCode: { type: String   },
    hotelId: { type: String   }

});

module.exports = mongoose.model('hotels', HotelShcema);
