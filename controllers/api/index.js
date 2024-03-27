const router = require('express').Router();

const orderRoutes = require('./order-routes.js');
const menuRoutes = require('./menu-routes.js');
router.use('/orders', orderRoutes);
router.use('/menu', menuRoutes);
module.exports = router;