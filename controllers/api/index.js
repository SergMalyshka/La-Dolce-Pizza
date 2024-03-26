const router = require('express').Router();

const orderRoutes = require('./order-routes.js');
const userRoutes = require('./user-routes.js');

router.use('/orders', orderRoutes)
router.use('/login', userRoutes)

module.exports = router;