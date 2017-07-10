var router = require('express').Router();
const airports = require('./airports.controller');

router.post('/book', airports.Booking);

module.exports = router;