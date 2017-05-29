var router = require('express').Router();

router.use('/airports', require('./airports'));
router.use('/hotels', require('./hotels'));

module.exports = router;