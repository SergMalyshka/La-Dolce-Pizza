const Dish = require('./dish');
const Order = require('./order');
const OrderList = require('./orderList')
const Mgmt = require('./mgmt')

Order.belongsToMany(Dish, {
    through: OrderList,
});

Dish.belongsToMany(Order, {
    through: OrderList,
});

module.exports = {
    Order,
    Dish,
    OrderList,
    Mgmt
}