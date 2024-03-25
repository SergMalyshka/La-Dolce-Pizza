const Item = require('./item');
const Order = require('./order');

Order.hasMany(Item);
Item.belongsToMany(Order);

module.exports = {
    Order,
    Item
}