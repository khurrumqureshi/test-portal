var router = require('express').Router();
const hotels = require('./hotels.controller');

router.get('/search', hotels.searchfilter);

module.exports = router;
