const { Dish } = require('../models');

const router = require('express').Router();


router.get('/', async (req, res) => {
    try {
        res.render('homepage', { loggedIn: req.session.loggedIn, cart: req.session.cart })
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
})

router.get('/menu', async (req, res) => {
    const menuDb =  await Dish.findAll();

    const dishes = menuDb.map((dish) =>
        dish.get({ plain: true })
    );

    try {
        res.render('menu', { loggedIn: req.session.loggedIn, dishes, cart: req.session.cart })
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

router.get('/order', async (req, res) => {
    try {
        res.render('order', { loggedIn: req.session.loggedIn, cart: req.session.cart })
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

module.exports = router;