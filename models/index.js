const Dish = require('./dish');
const Order = require('./order');
const Customer = require('./customer')
const OrderList = require('./orderList')
const Mgmt = require('./mgmt')

Customer.hasMany(Order);
Order.belongsTo(Customer)

Order.belongsToMany(Dish, {
    through: OrderList,
});

Dish.belongsToMany(Order, {
    through: OrderList,
});

module.exports = {
    Order,
    Dish,
    Customer,
    OrderList,
    Mgmt
}