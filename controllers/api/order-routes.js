const { Order, OrderList } = require('../../models');
const { phone } = require('phone');
// const {phone} = require('phone');


const router = require('express').Router();

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
        req.session.cart = [];
        res.status(204).end()
    } else {
        res.status(404).end()
    }
})

router.post('/checkout', async (req, res) => {
    const phoneVerifier = phone(req.body.phone)
    if (phoneVerifier.isValid) {
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
            console.log(cart)
            counter = {}

            cart.forEach(function (obj) {
                var key = JSON.stringify(obj)
                counter[key] = (counter[key] || 0) + 1
            })

            const keys = Object.keys(counter);
            const mappedKeys = []

            for (let i =0; i < keys.length; i++) {
                const obj = JSON.parse(keys[i])
                mappedKeys.push(obj)
            }

            const values = Object.values(counter)

            for (let i =0; i<mappedKeys.length; i++) {
                const data = { OrderId: newOrderId, DishId: mappedKeys[i].id, Quantity: values[i]}
                orderData.push(data)
            }

            OrderList.bulkCreate(orderData)
            req.session.cart = [];
            return res.status(200).end()
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    } else {
        res.status(400).json(req.body.phone)
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
            {
                where: {
                    id: req.params.id
                }
            });
        console.log('--------------over here-------------------------')

        if (!orderData) {
            res.status(404).json({ message: "No order with this id" })
            return
        }

        res.status(200).json(orderData)
    } catch (err) {
        res.status(500).json(err)
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const orderData = await Order.destroy({
            where: {
                id: req.params.id
            },
        });
        if (!orderData) {
            res.status(404).json({ message: 'No user with this id' })
            retrun
        }
        res.status(200).json(orderData)
    } catch (err) {
        res.status(500).json(err);
    };
})

module.exports = router;