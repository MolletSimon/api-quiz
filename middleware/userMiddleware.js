const jwt = require('jsonwebtoken');
const config = require('../config');
const Quiz = require('../models/Quiz');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, config.API_TOKEN);
        const userId = decodedToken._id;
        Quiz.findOne({ _id: req.params.id })
            .then(quiz => {
                if (quiz.userId != userId) {
                    throw `You don't have authorization to do that`;
                } else {
                    next();
                }
            })
            .catch(error => res.status(401).json({error}));
    } catch {
        res.status(401).json({error: 'Requête non authentifiée'});
    }
}
