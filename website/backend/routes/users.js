const express = require('express');
const passport = require('passport');
const router = express.Router();
const User = require('../models/user.model');

router.post('/', (req, res) => {
    console.log('user signup');

    const username = req.body.username;
    const password = req.body.password;

    req.session.username = req.body.username;

    User.findOne({username: username}, (err, user) => {

        if (err) {
            console.log('Err: ' + err);
        } else if (user) {
            res.json({
                'error': 'A user with that username already exists'
            });
        } else {
            const newUser = new User({
                username: username,
                password: password
            });
            newUser.save((err, savedUser) => {
                if (err) {
                    return res.json(err);
                }

                res.json(savedUser);
            })
        }

    })
});

router.post('/login', function(req, res, next) {
    console.log('routes/user.js, login, req.body: ');
    console.log(req.body);
    next();
},
    passport.authenticate('local'), 
    (req, res) => {
        console.log('logged in', req.user);
        var userInfo = {
            username: req.user.username
        };
        res.send(userInfo);
    }
)
module.exports = router;