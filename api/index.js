var router = require('express').Router();

router.use('/airports', require('./airports'));
module.exports = router;