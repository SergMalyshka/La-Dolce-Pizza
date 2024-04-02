const { Order } = require('../models');

const orderData = [
    {
        order_status: "Complete",
        order_total: 42.88,
        payment_type: 'Cash',
        address: '1234 4th street',
        phone: '8187549853',
        order_type: "Delivery",
    },
    {
        order_status: "Out for delivery",
        order_total: 69.69,
        payment_type: 'Credit card',
        instructions: "Very spice please!",
        address: '3333 Spring Garden st',
        phone: '2051648914',
        order_type: "Delivery"
    },
    {
        order_status: "Ordered",
        order_total: 17.99,
        payment_type: 'Digital Wallet',
        instructions: 'No paper napkins',
        phone: '2222222222',
        order_type: "Pickup",
    },
];

const seedOrder = () => Order.bulkCreate(orderData);

module.exports = seedOrder;