var router = require('express').Router();
const airports = require('./airports.controller');

router.get('/sort', airports.sorting);

module.exports = router;