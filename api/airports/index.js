var router = require('express').Router();
const airport = require('./airport.controller');

router.get('/sort', airport.sorting);

module.exports = router;