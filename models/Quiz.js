const mongoose = require('mongoose');

const quizSchema = mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
    title: {type: String, required: true},
    questions: [{
        title: {type: String, required: true},
        propositions: {
            goodAnswer: {type: Number, required: true},
            answers:
                [{
                    id: {type: Number, required: true},
                    response: {type: String, required: true}
                }]
        }
    }]
});

module.exports = mongoose.model('quiz', quizSchema); //
