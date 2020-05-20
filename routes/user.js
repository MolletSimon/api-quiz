const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');
const auth = require('../middleware/auth');

router.post('/login', userCtrl.login);

router.post('/signup', userCtrl.signup);

module.exports = router;