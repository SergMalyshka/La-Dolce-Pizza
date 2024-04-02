const { Dish } = require('../models');

const dishData = [
    {
        name: "Pizza - Cheez",
        price: 17.99,
        cost: 4.25,
    },
    {
        name: "Pizza - Meat",
        price: 21.99,
        cost: 5.15,
    },
    {
        name: "Pizza - Veggie",
        price: 19.99,
        cost: 4.90,
    },
    {
        name: "Pizza - Buffalo Chicken",
        price: 20.99,
        cost: 4.90,
    },
    {
        name: "Pizza - Gyro",
        price: 19.59,
        cost: 4.90,
    },
    {
        name: "Fish Sandwich",
        price: 10.99,
        cost: 4.90,
    },
    {
        name: "Calzone - Steak",
        price: 21.99,
        cost: 4.90,
    },
    {
        name: "Calzone - Chicken",
        price: 22.99,
        cost: 4.90,
    },
    {
        name: "Calzone - Italian",
        price: 19.99,
        cost: 4.90,
    },
    {
        name: "Wedgie - Gyro",
        price: 19.19,
        cost: 4.90,
    },
    {
        name: "Wedgie - Steak",
        price: 18.99,
        cost: 4.90,
    },
];

const seedDish = () => Dish.bulkCreate(dishData);

module.exports = seedDish;