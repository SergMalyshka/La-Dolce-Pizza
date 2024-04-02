const { Order, OrderList } = require('../../models');


const router = require('express').Router();
const { Order } = require('../../models')

router.post('/addToOrder', async (req, res) => {

    try {
        req.session.save(() => {
            const orderItem = {
                name: req.body.name,
                price: req.body.price,
                id: req.body.id
            }

            if (req.session.cart) {
                req.session.cart.push(orderItem)
                console.log("File: order-routes.js, req.session.save, req.session.cookie")
            } else {
                req.session.cart = [];
                req.session.cart.push(orderItem)
            }

            console.log(req.session.cart)

            res
                .status(200)
                .json({ message: "Item added to the cart" })
        })
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
})

router.get('/total', async (req, res) => {
    try {
        const currentCart = req.session.cart;
        let total = 0;
        for (item of currentCart) {
            const price = parseFloat(item.price)
            total = total + price;
        }
        res.status(200).json({ totalPrice: total })
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
})

router.get('/', async (req, res) => {
    try {
        res.render('order', { orders, loggedIn: req.session.loggedIn, cart: req.session.cart })
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
})

router.post('/cancel', (req, res) => {
    if (req.session.cart) {
        req.session.destroy(() => {
            res.status(204).end()
        })
    } else {
        res.status(404).end()
    }
})

router.post('/checkout', async (req, res) => {
    const order = req.session.cart;
    try {
        const newOrder = await Order.create({
            order_status: "Ordered",
            order_total: req.body.orderTotal,
            payment_type: req.body.paymentType,
            instructions: req.body.instructions,
            address: req.body.address,
            phone: req.body.phone,
            order_type: req.body.orderType
        })


        const newOrderId = newOrder.dataValues.id;
        const cart = req.session.cart;
        const orderData = []

        console.log("this is the cart: " + cart)

        for (item of cart) {
            data = { OrderId: newOrderId, DishId: item.id }
            orderData.push(data)
        }

        OrderList.bulkCreate(orderData)

    } catch (err) {
        console.log(err)
    }

})

router.put('/:id', async (req, res) => {
    try {
        // console.log(req.body)
        const orderData = await Order.update({
            order_status: req.body.status,
            order_total: req.body.total,
            payment_type: req.body.paymentType,
            instuctions: req.body.instructions,
            address: req.body.address,
            phone: req.body.phone,
            order_type: req.body.type,
        },
        {   where: {
                id: req.params.id
            }
        });
        console.log('--------------over here-------------------------')

        if(!orderData) {
            res.status(404).json({ message: "No order with this id" })
            return
        }

        res.status(200).json(orderData)
    } catch (err) {
        res.status(500).json(err)
    } 
});

module.exports = router;