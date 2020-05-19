const mongoose = require('mongoose');

const quizSchema = mongoose.Schema({
    title: {type: String, required: true},
    questions: [{
        title: {type: String, required: true},
        propositions: {
            goodAnswer: {type: Number, required: true}
                [{
                id: {type: Number, required: true},
                response: {type: Number, required: true}
            }]
        }
    }]
});

module.exports = mongoose.model('quiz', quizSchema);
