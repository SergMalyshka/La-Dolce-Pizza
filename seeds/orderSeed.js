const { Order } = require('../models');

const orderData = [
    {
        order_status: "Complete",
        order_total: 42.88,
        payment_type: 'Cash',
        CustomerId: 2

    },
    {
        order_status: "Out for delivery",
        order_total: 69.69,
        payment_type: 'Credit card',
        instructions: "Very spice please!",
        CustomerId: 3
    },
    {
        order_status: "Ordered",
        order_total: 17.99,
        payment_type: 'Digital Wallet',
        instructions: 'No paper napkins',
        CustomerId: 1
    },
];

const seedOrder = () => Order.bulkCreate(orderData);

module.exports = seedOrder;