const Quiz = require('../models/Quiz');

exports.addQuiz = (req, res, next) => {
    const quiz = new Quiz({
        ...req.body
    });
    quiz.save()
        .then(() => res.status(201).json({quiz}))
        .catch(error => res.status(400).json({error}))
}

exports.getQuiz = (req, res, next) => {
    Quiz.findOne({ _id: req.params.id })
        .then(quiz => res.status(200).json({quiz}))
        .catch(error => res.status(400).json({error}));
}
