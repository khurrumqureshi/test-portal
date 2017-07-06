var router = require('express').Router();
const hotels = require('./hotels.controller');

router.get('/booking', hotels.booking);

module.exports = router;
