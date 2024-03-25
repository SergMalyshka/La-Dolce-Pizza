const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Order extends Model{}

Order.init(
    {
        order_status: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        order_total: {
            type: DataTypes.DECIMAL,
            allowNull:false,
        },
        payment_type: {
            type: DataTypes.DECIMAL,
            allowNull:false
        }
    },
    {
        sequelize,
    }
);

module.exports = Order;