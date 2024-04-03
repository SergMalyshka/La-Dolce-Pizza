const { OrderList } = require('../../models');

const router = require('express').Router();

router.post('/', async (req, res) => {
    console.log(req.body)
    try {
        const OrderListData = await OrderList.create({
            OrderId: req.body.orderId,
            DishId: req.body.menuItem,
            Quantity: req.body.quantity
        });

        res.status(200).json(OrderListData);
    } catch(err) {
        res.status(500).json(err)
    }
});

module.exports = router