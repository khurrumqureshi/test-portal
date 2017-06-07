var router = require('express').Router();
const hotels = require('./hotels.controller');

router.get('/search', hotels.search);
router.get('/searchfs', hotels.searchfs);
// router.post('/create', hotels.createHotel);

module.exports = router;