const router = require('express').Router();


router.get('/', async (req, res) => {
    try {
        res.render('homepage')
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
})

router.get('/menu', async (req, res) => {
    try {
        res.render('menu')
    } catch(err) {
        console.log(err)
        res.status(500).json(err)
    }
})

router.get('/order', async (req, res) => {
    try {
        res.render('order')
    } catch(err) {
        console.log(err)
        res.status(500).json(err)
    }
})

module.exports = router;