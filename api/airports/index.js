var router = require('express').Router();
const airports = require('./airports.controller');

router.get('/search', airports.search);
router.post('/create', airports.createAirPort);
router.post('/hello', (req, res ) => {

    res.send("hello wqorld");
});

module.exports = router;