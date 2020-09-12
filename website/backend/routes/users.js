const router = require('express').Router({mergeParams: true});
let User = require('../models/user.model');

// CREATE
router.route('/').post((req, res) => {

});

// SHOW
router.route('/:id').get((req, res) => {

});

module.exports = router;