const router = require('express').Router({mergeParams: true});
let Question = require('../models/question.model');

// INDEX
router.route('/:id').get((req, res) => {
    Question.find()
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json('Error: ' + err))
});

// CREATE
router.route('/').post((req, res) => {
    // const user = req.body.user;
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

    Question.create(newQuestion, (err, question) => {
        if (err) {
            console.log('Error: ' + err);
        } else {
            console.log(question);
            res.send(question);
        }
    });
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