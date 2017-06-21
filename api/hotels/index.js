var router = require('express').Router();
const hotels = require('./hotels.controller');

router.get('/sort', hotels.sorting);

module.exports = router;
