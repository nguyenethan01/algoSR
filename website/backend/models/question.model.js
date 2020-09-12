const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const questionSchema = new Schema({
    title: {type: String, required: true},
    url: {type: String},
    dateAdded: {type: Date, required: true},
    dateToReview: {type: Date, required: true},
    comments: {type: String},
    previousAttempts: {type: Array, required: true},
    difficultyHistory: {type: Array, required: true}
});

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;