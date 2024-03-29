const { Dish } = require('../../models');
const router = require('express').Router();

// /menu routes
router.get('/dishes', async (req,res) => {
    try {
        const dbMenu = await Dish.findAll({
            attributes: ['id', 'name', 'price'],
        })
        const menuDb = dbMenu.map((dish) => dish.get({plain:true}));
        console.log(menuDb);
        res.render('menu-manager', {menuDb});

    } catch (err){
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/dishes/add', async (req,res) => {
    res.render('dish-manager')
    }
);

router.post('/dishes/add', async (req,res) => {
    try {
        const newDish = await Dish.create({
            name:req.body.name,
            price:req.body.price,
        })
        res.status(200).json(newDish);
    } catch (err){
        console.log(err);
        res.status(500).json(err);
    }
});










module.exports = router;
