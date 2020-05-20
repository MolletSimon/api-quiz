const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

//routes
const quizRoutes = require('./routes/quiz');

mongoose.connect(
    'mongodb+srv://simon-quiz:molimo76@cluster0-twfrq.mongodb.net/api-quiz?retryWrites=true&w=majority',
    {useNewUrlParser: true,
        useUnifiedTopology: true})
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

//set header
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
})

//parse the body for post request
app.use(bodyParser.json());

app.use('/quiz', quizRoutes);
module.exports = app;
