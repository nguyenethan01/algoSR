const router = require('express').Router({mergeParams: true});
let User = require('../models/user.model');

// CREATE
router.route('/').post((req, res) => {

    console.log('here');
    
    const username = req.body.username;
    const password = req.body.password;

    const newUser = {username: username, password: password};

    User.create(newUser, (err, user) => {
        if (err) {
            console.log(err);
            res.send('error');
        } else {
            console.log(user);
            res.json(user);
        }
    });
});

// SHOW
router.route('/login').get((req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    User.findOne
});

module.exports = router;