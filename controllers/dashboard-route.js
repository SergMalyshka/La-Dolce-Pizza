const router = require('express').Router();
const { Order, Dish, OrderList } = require ('../models')

// shows all orders in the dashboard
router.get('/', async (req, res) => {
    try {
        const orderDb = await Order.findAll();


        // try to sort orderDb into objects depending on order status
        console.log('-----------------------------', orderDb);

        const orders = orderDb.map((orders) =>
            orders.get({ plain: true })
            );
        
        console.log('---------------------------', orders)

        res.render('dashboard', {orders, loggedIn: req.session.loggedIn, cart: req.session.cart })
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
})

// to see more details of a sinlge order
router.get('/:id', async (req, res) => {
    try {
        const orderDb = await Order.findByPk(req.params.id, {
            include: [{ model: Dish }]
        });

        console.log(orderDb)
        
        const orders = orderDb.get({ plain: true });

        console.log('cooked data-------------------', orders);

        res.render('order-details', { orders, loggedIn: req.session.loggedIn, cart: req.session.cart  });
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    };
});

router.get('/update/:id', async (req, res) => {
    try {
        const orderDb = await Order.findByPk(req.params.id, {
            include: [{ model: Dish }] 
        });

        const menuDb = await Dish.findAll()

        
        // console.log(orderDb);
        // console.log(menuDb)

        const orders = orderDb.get ({plain: true})
        const menu = menuDb.map((menu) =>
            menu.get({ plain: true })
            );

        console.log(orders)
        // console.log(menu)

        res.render('order-update', { orders, menu, loggedIn: req.session.loggedIn, cart: req.session.cart  })
    } catch (err) {
        console.log(err);
        res.status(500).json
    };
});

module.exports = router;