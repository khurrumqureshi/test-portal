var router = require('express').Router();
const hotels = require('./hotels.controller');

router.post('/booking', hotels.booking);

module.exports = router;
