var router = require('express').Router();
const airports = require('./airports.controller');

router.get('/search', airports.searchfilter);

module.exports = router;