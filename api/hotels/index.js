var router = require('express').Router();
const hotels = require('./hotels.controller');

router.get('/searchfilter', hotels.searchfilter);

module.exports = router;