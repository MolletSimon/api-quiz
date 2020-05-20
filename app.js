const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const config = require('./config');

//import routes
const quizRoutes = require('./routes/quiz');
const userRoutes = require('./routes/user');

//mongoose connection
mongoose.connect(
    `mongodb://${config.MONGOUSER}:${config.MONGOPASS}@cluster0-shard-00-00-twfrq.mongodb.net:27017,cluster0-shard-00-01-twfrq.mongodb.net:27017,cluster0-shard-00-02-twfrq.mongodb.net:27017/api-quiz?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority`,
    {useNewUrlParser: true,
        useUnifiedTopology: true})
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch((err) => console.log('Connexion à MongoDB échouée ! ' + err));

//set header
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
})

//parse the body for post request
app.use(bodyParser.json());

//routes
app.use('/quiz', quizRoutes);
app.use('/user', userRoutes);

module.exports = app;
