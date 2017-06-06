var router = require('express').Router();
const airports = require('./airports.controller');

router.get('/search', airports.search);
router.post('/create', airports.createAirPort);
router.get('/read', airports.readAirport);
router.put('/update/:airID', airports.updateAirport);
router.delete('/delete', airports.deleteAirport);

module.exports = router;