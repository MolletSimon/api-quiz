const jwt = require('jsonwebtoken');
const config = require('../config');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, config.API_TOKEN);
        const username = decodedToken.username;
        if (req.body.username && req.body.username !== username) {
            throw 'User ID non valable !';
        } else {
            next();
        }
    } catch {
        res.status(401).json({error: 'Requête non authentifiée'});
    }
}
