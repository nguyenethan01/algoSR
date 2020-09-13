const router = require('express').Router({mergeParams: true});
let Question = require('../models/question.model');
let User = require('../models/user.model');

// INDEX
router.route('/:id').get((req, res) => {
    User.findById(req.params.id).populate('questions').exec((err, foundUser) => {
        console.log(foundUser['username']);
        if (err) {
            console.log('Error: ' + err)
        } else {
            res.json({
                username: foundUser['username'],
                questions: foundUser['questions']
            });
        }
    });
});

// CREATE
router.route('/:id').post((req, res) => {
    const title = req.body.title;
    const url = req.body.url;
    const dateAdded = req.body.dateAdded;
    const dateToReview = req.body.dateToReview;
    // const dateAdded = Date.parse(req.body.dateAdded);
    // const dateToReview = Date.parse(req.body.dateToReview);
    const comments = req.body.comments;
    const previousAttempts = req.body.previousAttempts;
    const difficultyHistory = req.body.difficultyHistory;
    const newQuestion = {title, url, dateAdded, dateToReview, comments, previousAttempts, difficultyHistory};
    console.log('here');
    User.findById(req.params.id).populate('questions').exec((err, foundUser) => {

    Question.create(newQuestion, (err, question) => {
        if (err) {
            console.log('Error: ' + err);
        } else {
            console.log(question);
            foundUser.questions.push(question);
            foundUser.save();
            console.log(foundUser);
        }
    });
    })
});

// SHOW
router.route('/:id').get((req, res) => {
    Question.findById(req.params.id, (err, question) => {
        if (err) {
            console.log(err);
        } else {
            console.log(question);
            res.send(question);
        }
    });
});

// // UPDATE
// router.route('/:id').update((req, res) => {

// });

// // DELETE
// router.route('/:id').delete((req, res) => {

// });

module.exports = router;