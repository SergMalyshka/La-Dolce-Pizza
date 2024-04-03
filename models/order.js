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
            type: DataTypes.DECIMAL(10,2),
            allowNull:false,
        },
        payment_type: {
            type: DataTypes.STRING,
            allowNull:false
        },
        instructions: {
            type: DataTypes.STRING
        },
        address: {
            type: DataTypes.STRING
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        order_type : {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
    }
);

module.exports = Order;