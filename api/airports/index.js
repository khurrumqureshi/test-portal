var router = require('express').Router();
const airport = require('./airport.controller');

router.get('/sort', airport.sorting);
router.post('/book', airport.Booking);
router.get('/search', airports.searchfilter);
module.exports = router;