const router = require('express').Router();

const orderRoutes = require('./order-routes.js');
const dishRoutes = require('./dish-routes.js');
const loginRoutes = require('./login-routes.js');


router.use('/orders', orderRoutes);
router.use('/menu', menuRoutes);
router.use('/login', userRoutes)
module.exports = router;