const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Dish extends Model{}

Dish.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
        },
        cost: {
            type: DataTypes.DECIMAL(10,2),
        }
    },
    {
        sequelize,
        timestamps: false,
    }
);

module.exports = Dish;