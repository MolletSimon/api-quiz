const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    mail: {type: String, required: true},
    username: {type: String, required: true},
    password: {type: String, required: true},
    active: {type: Boolean, required: true}
});

module.exports = mongoose.model('user', userSchema);