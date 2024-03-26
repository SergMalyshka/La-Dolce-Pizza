const { Customer } = require('../models');

const customerData = [
    {
        phone: '2222222222'
    },
    {
        phone: '2051648914'
    },
    {
        phone: '8187549853'
    },
];

const seedCustomer = () => Customer.bulkCreate(customerData);

module.exports = seedCustomer;