var router = require('express').Router();
const airports = require('./airport.controller');

router.get('/search', airports.searchfilter);
router.get('/sort', airports.sorting);
router.post('/book', airports.Booking);

module.exports = router;
