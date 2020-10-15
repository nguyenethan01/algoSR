//imports
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
            //debug errrors
            console.log(err);
            res.send('error');
        } else {
            //pass info
            console.log(user);
            res.json(user);
        }
    });
});

// SHOW
router.route('/login').post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    User.findOne({username: username}, (err, user) => {
        
        if (err) {
            //debug error
            return res.status(400).send({
                message: 'Server error'
             });
        } else if (!user) {
            //error if no user
            return res.status(401).send({
                message: "Username doesn't exist"
             });
        } else {
            //error if password not correct
            if (password === user.password) {
                res.send({
                    id: user._id
                });    
            } else {
                return res.status(402).send({
                    message: "Incorrect password"
                 });
            }
        }
    });
});

module.exports = router;