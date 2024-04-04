const Mgmt = require('../../models/mgmt');

const router = require('express').Router();


router.get('/', async (req, res) => {
    try {
        res.render('login')
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

router.post('/login', async (req, res) => {
    try {
        const dbUserData = await Mgmt.findOne({
            where: {
                username: req.body.username,
            },
        });

        if (!dbUserData) {
            res
                .status(400)
                .json({ message: "Incorrect username or password, please try again" });
            return;
        }

        const validPassword = await dbUserData.checkPassword(req.body.password);

        if (!validPassword) {
            res
                .status(400)
                .json({ message: "Incorrect username or password, please try again" });
            return;
        }

        req.session.save(() => {
            req.session.loggedIn = true;
            console.log(
                'File: login-routes.js ~ req.session.save ~ req.session.cookie',
                req.session.cookie
            );

            res
                .status(200)
                .json({user: dbUserData, message: "You are now logged in"})
        })
    } catch(err) {
        console.log(err);
        res.status(500).json(err)
    }
})


router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
          res.status(204).end();
        });
      } else {
        res.status(404).end();
      }
  });

module.exports = router;