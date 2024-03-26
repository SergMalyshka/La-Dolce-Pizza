const router = require('express').Router();

const orderRoutes = require('./order-routes.js');
router.use('/orders', orderRoutes)

module.exports = router;