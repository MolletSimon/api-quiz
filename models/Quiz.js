const mongoose = require('mongoose');

const quizSchema = mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
    title: {type: String, required: true},
    questions: [{
        title: {type: String, required: true},
        answers:
            [{
                response: {type: String, required: true},
                good: {type: Boolean, required: true}
            }]
    }]
});

module.exports = mongoose.model('quiz', quizSchema); //
