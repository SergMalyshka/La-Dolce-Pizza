const { OrderList } = require('../models');

const orderListData = [
    {
        OrderId: 1,
        ItemId: 2
    },
    {
        OrderId: 1,
        ItemId: 3
    },
    {
        OrderId: 2,
        ItemId: 2
    },
    {
        OrderId: 2,
        ItemId: 1
    },
    {
        OrderId: 2,
        ItemId: 3
    },
    {
        OrderId: 3,
        ItemId: 1
    }
];

const seedOrderList = () => OrderList.bulkCreate(orderListData);

module.exports = seedOrderList;