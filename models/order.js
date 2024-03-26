const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Order extends Model{}

Order.init(
    {
        order_status: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        order_total: {
            type: DataTypes.DECIMAL,
            allowNull:false,
        },
        payment_type: {
            type: DataTypes.STRING,
            allowNull:false
        },
        instructions: {
            type: DataTypes.STRING
        }
    },
    {
        sequelize,
    }
);

module.exports = Order;