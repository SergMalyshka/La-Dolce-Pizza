const { Item } = require('../models');

const itemData = [
    {
        name: "Cheez Pizza",
        price: 17.99,
        cost: 4.25,
    },
    {
        name: "Meat Pizza",
        price: 21.99,
        cost: 5.15,
    },
    {
        name: "Veggie Pizza",
        price: 19.99,
        cost: 4.90,
    },
];

const seedItem = () => Item.bulkCreate(itemData);

module.exports = seedItem;