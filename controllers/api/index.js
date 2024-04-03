const router = require('express').Router();

const orderRoutes = require('./order-routes.js');
const dishRoutes = require('./dish-routes.js');
const loginRoutes = require('./login-routes.js');
const orderListRoutes = require('./orderList-routes.js')

router.use('/orders', orderRoutes);
router.use('/menu', dishRoutes);
router.use('/login', loginRoutes)
router.use('/order-list', orderListRoutes)

module.exports = router;