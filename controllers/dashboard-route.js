const router = require('express').Router();
const { Order, Dish, OrderList } = require('../models')

// shows all orders in the dashboard
router.get('/', async (req, res) => {
    try {
        const orderDb = await Order.findAll();


        // try to sort orderDb into objects depending on order status
        console.log('-----------------------------', orderDb);

        const orders = orderDb.map((orders) =>
            orders.get({ plain: true })
        );
        const ordered = []
        const preparing = []
        const outForDelivery = []
        const completed = []
        const cancelled = []

        for (let i = 0; i < orders.length; i++) {
            if(orders[i].order_status === "Ordered") {
                ordered.push(orders[i])
            } else if (orders[i].order_status === "Preparing") {
                preparing.push(orders[i])
            } else if (orders[i].order_status === "Out for Delivery") {
                outForDelivery.push(orders[i])
            } else if (orders[i].order_status === "Completed") {
                completed.push(orders[i])
            } else if (orders[i].order_status === "Cancelled") {
                cancelled.push(orders[i])
            }
        }
        // console.log('---------------------------', orders)
        // console.log('--ordered-------------------------------------', ordered)
        // console.log('--preparing-------------------------------------', preparing)
        // console.log('--outForDelivery-------------------------------------', outForDelivery)
        // console.log('--completed-------------------------------------', completed)
        // console.log('--cancelled-------------------------------------', cancelled)


        res.render('dashboard', { ordered, preparing, outForDelivery, completed, cancelled, loggedIn: req.session.loggedIn, cart: req.session.cart })
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

        // console.log(orderDb)

        const orders = orderDb.get({ plain: true });

        // console.log('cooked data-------------------', orders);

        res.render('order-details', { orders, loggedIn: req.session.loggedIn, cart: req.session.cart });
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

        const orders = orderDb.get({ plain: true })
        const menu = menuDb.map((menu) =>
            menu.get({ plain: true })
        );
        
        // for (let i=0; i < orders.Dishes.length; i++) {
        //     // console.log(orders.Dishes[i].name)
        //     const filterMenu = menu.filter((item, index, array) => {
        //         return item.name !== orders.Dishes[i].name;
        //     })
        //     console.log(filterMenu)
        // }

        res.render('order-update', { orders, menu, loggedIn: req.session.loggedIn, cart: req.session.cart })
    } catch (err) {
        console.log(err);
        res.status(500).json
    };
});

module.exports = router;