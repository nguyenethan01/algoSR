//imports
const router = require('express').Router({mergeParams: true});
let Question = require('../models/question.model');
let User = require('../models/user.model');

// INDEX
router.route('/:id').get((req, res) => {
    User.findById(req.params.id).populate('questions').exec((err, foundUser) => {
        console.log(foundUser['username']);
        if (err) {
            //return debug error
            console.log('Error: ' + err)
        } else {
            res.json({
                //pass info
                username: foundUser['username'],
                questions: foundUser['questions']
            });
        }
    });
});

// CREATE
router.route('/:id').post((req, res) => {

    const currDate = new Date();
    //user info
    const title = req.body.title;
    const url = req.body.url;
    const timeDelta = 3;
    const comments = req.body.comments;
    const previousAttempts = [currDate];
    const dateToReview = currDate.setDate(currDate.getDate() + 3);
    const difficultyHistory = ['Added'];
    const newQuestion = {title, url, timeDelta, dateToReview, comments, previousAttempts, difficultyHistory};
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

// UPDATE
router.route('/:id').put((req, res) => {
    console.log(req.body)
    // difficulty, timeDelta, difficultyHistory, previousAttempts

    const timeDeltaMultiplier = {"easy": 2, "medium": 1.5, "hard": 1};

    const newTimeDelta = req.body.timeDelta*timeDeltaMultiplier[req.body.difficulty];
    const date = new Date(req.body.previousAttempts.slice(-1)[0]);
    console.log(typeof date);
    const newDate = date.setDate(date.getDate() + newTimeDelta);
    req.body.previousAttempts.push(new Date());
    req.body.difficultyHistory.push(req.body.difficulty)
    
    Question.findByIdAndUpdate(req.params.id, {
        "timeDelta": newTimeDelta,
        "dateToReview": newDate,
        "previousAttempts": req.body.previousAttempts,
        "difficultyHistory": req.body.difficultyHistory
    },
    (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.json(result);
        }
    });
});

// // DELETE
// router.route('/:id').delete((req, res) => {

// });

module.exports = router;