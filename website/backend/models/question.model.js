const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const questionSchema = new Schema({
    title: {type: String, required: true},
    url: {type: String},
    dateAdded: {type: String, required: true},
    dateToReview: {type: String, required: true},
    comments: {type: String},
    previousAttempts: {type: String, required: true},
    difficultyHistory: {type: String, required: true}
});

module.exports = mongoose.model("Question", questionSchema);