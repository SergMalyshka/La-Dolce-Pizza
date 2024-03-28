const { Order } = require('../models');

const orderData = [
    {
        order_status: "Complete",
        order_total: 42.88,
        payment_type: 'Cash',
        address: '1234 4th street',
        order_type: "delivery",
        CustomerId: 2
    },
    {
        order_status: "Out for delivery",
        order_total: 69.69,
        payment_type: 'Credit card',
        instructions: "Very spice please!",
        address: '3333 Spring Garden st',
        order_type: "delivery",
        CustomerId: 3
    },
    {
        order_status: "Ordered",
        order_total: 17.99,
        payment_type: 'Digital Wallet',
        instructions: 'No paper napkins',
        order_type: "pickup",
        CustomerId: 1
    },
];

const seedOrder = () => Order.bulkCreate(orderData);

module.exports = seedOrder;