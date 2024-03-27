const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Customer extends Model{}

Customer.init(
    {
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        sequelize,
    }  
);

module.exports = Customer