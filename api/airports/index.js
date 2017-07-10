var router = require('express').Router();
const airport = require('./airports.controller');

router.get('/sort', airport.sorting);
router.post('/book', airports.Booking);
module.exports = router;