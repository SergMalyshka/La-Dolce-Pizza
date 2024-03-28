const router = require('express').Router();
const { Order, Dish, Customer, OrderList } = require ('../models')

// shows all orders in the dashboard
router.get('/', async (req, res) => {
    try {
        const orderDb = await Order.findAll({
            include: [
                {
                    model: Dish,
                    attributes: [
                        'name'
                    ]
                },
                {
                    model: Customer,
                    attributes: [
                        'phone'
                    ]
                },
            ],
        })

        console.log('-----------------------------', orderDb);

        const orders = orderDb.map((orders) =>
            orders.get({ plain: true })
            );
        
        console.log('---------------------------', orders)

        res.render('dashboard', {orders, loggedIn: req.session.loggedIn})
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
})

// to see more details of a sinlge order
router.get('/dashboard/:id', async (req, res) => {
    try {
        const orderDb = await Order.findByPk(req.params.id, {
            include: [
                {
                    model: Dish,
                    attributes: [
                        'name',
                        'price',
                        'cost'
                    ]
                },
            ],
        });

        console.log(orderDb)
        
        const orders = orderDb.get({ plain: true });

        console.log('cooked data-------------------', orders);

        res.render('dashboard', { orders, loggedIn: req.session.loggedIn });
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    };
});


module.exports = router;