const router = require('express').Router();

const orderRoutes = require('./order-routes.js');
const menuRoutes = require('./menu-routes.js');
router.use('/orders', orderRoutes);
router.use('/menu', menuRoutes);
const userRoutes = require('./user-routes.js');

router.use('/login', userRoutes)
module.exports = router;