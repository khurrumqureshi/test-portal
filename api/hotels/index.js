var router = require('express').Router();
const hotels = require('./hotels.controller');

router.get('/search', hotels.search);
router.post('/create', hotels.createHotel);
router.get('/show', hotels.showHotel);
router.put('/update/:hotelID', hotels.updateHotel);
router.delete('/delete', hotels.deleteHotel);


module.exports = router;