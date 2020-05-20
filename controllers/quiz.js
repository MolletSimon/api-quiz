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

exports.removeQuiz = (req, res, next) => {
    Quiz.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({message: 'Quiz deleted !'}))
        .catch(error => res.status(400).json({error}));
}

exports.updateQuiz = (req, res, next) => {
    Quiz.updateOne({ _id: req.params.id}, {...req.body})
        .then(quiz => res.status(200).json({quiz}))
        .catch(error => res.status(400).json({error}));
}

exports.removeQuestionFromQuiz = (req, res, next) => {
    Quiz.findOne({_id: req.params.id})
        .then(quiz => {
            const question = quiz.questions.filter(q => q._id != req.params.question);
            quiz.questions.splice(question.id - 1, 1);
            const newQuiz = new Quiz({
                ...quiz
            });
            quiz.save()
                .then((quiz) => res.status(200).json({quiz}))
                .catch(error => res.status(400).json({error}));
        })
        .catch(error => res.status(400).json({error}));
}

exports.addQuestionToQuiz = (req, res, next) => {
    Quiz.findOne( {_id: req.params.id })
        .then(quiz => {
            quiz.questions.push(req.body);
            const newQuiz = new Quiz({
                ...quiz
            });
            quiz.save()
                .then(quiz => res.status(201).json({quiz}))
                .catch(err => res.status(400).json({error}));
        })
        .catch(error => res.status(400).json({error}));
}
