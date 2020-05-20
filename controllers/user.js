const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config');

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = new User({
                ...req.body,
                password: hash,
                active: true
            });
            user.save()
                .then(() => res.status(201).json({ message: 'user signup !' }))
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {
    User.findOne({mail: req.body.mail})
        .then(user => {
            if (!user) {
                throw `User not found`;
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        res.status(401).json({message: 'Incorrect password'})
                    } else {
                        res.status(201).json({
                            username: user.username,
                            token: jwt.sign(
                                { username: user.username },
                                `${config.API_TOKEN}`,
                                { expiresIn: '72h' }
                            )
                        })
                    }
                })
                .catch(error => res.status(500).json({error}))
        })
        .catch(error => res.status(404).json({error}))
}