var router = require('express').Router();

router.use('/hotels', require('./hotels'));

module.exports = router;