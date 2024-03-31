const { Dish } = require('../../models');
const router = require('express').Router();

//      ---  /api/menu routes  ---

// show all dishes
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

// render add-dish page
router.get('/dishes/add', async (req,res) => {
    res.render('dish-manager')
    }
);

// add new dish to database
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

// render 1 dish to edit or delete
router.get('/dishes/:id', async (req,res) => {
    try {
        const oneDish = await Dish.findOne({
            where:{ id:req.params.id,
            },
            attributes: ['id', 'name', 'price'],
        })
        const editDish = oneDish.get({plain:true});
        console.log(editDish);
        res.render('dish-edit', {editDish});
    } catch (err){
        console.log(err);
        res.status(500).json(err);
    }
});

// edit a menu item
router.put("/dishes", async (req, res) => {
    try {
      const updateDish = await Dish.update(
        {
          name: req.body.name,
          price: req.body.price,
        },
        {
          where: {
            id: req.body.id,
          },
        }
      );
      res.status(200).json({ message: "Menu item updated." });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // delete a menu item
  router.delete("/dishes/:id", async (req, res) => {
    try {
      const delDish = await Dish.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json({ message: "Menu item deleted" });
    } catch (err) {
      res.status(500).json({ message: "Cannot delete menu item" });
    }
  });

module.exports = router;
