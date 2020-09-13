const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const questionSchema = new Schema({
    
    title: {type: String, required: true},
    url: {type: String},
    dateToReview: {type: Date, required: true},
    timeDelta: {type: Number, required: true},
    comments: {type: String},
    previousAttempts: {type: [Date], required: true},
    difficultyHistory: {type: [String], required: true}
});

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;