var router = require('express').Router();
const airports = require('./airports.controller');

router.get('/search', airports.search);

module.exports = router;