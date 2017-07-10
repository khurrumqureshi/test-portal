var router = require('express').Router();
const airports = require('./airports.controller');

router.post('/book', airports.Booking);
router.get('/sort', airport.sorting);


module.exports = router;