const { OrderList } = require('../models');

const orderListData = [
    {
        OrderId: 1,
        DishId: 2
    },
    {
        OrderId: 1,
        DishId: 3
    },
    {
        OrderId: 2,
        DishId: 2
    },
    {
        OrderId: 2,
        DishId: 1
    },
    {
        OrderId: 2,
        DishId: 3
    },
    {
        OrderId: 3,
        DishId: 1
    }
];

const seedOrderList = () => OrderList.bulkCreate(orderListData);

module.exports = seedOrderList;