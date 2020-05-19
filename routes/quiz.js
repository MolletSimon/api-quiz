const express = require('express');
const router = express.Router();
const quizCtrl = require('../controllers/quiz');

/**
 * @route GET /question/{quiz}/{id}
 * @group Question
 * @param {id} id.query.required - question id
 * @param {quiz} quiz.query.required - quiz id
 * @returns {Question} question object
 */
router.get('/quiz/:id', quizCtrl.getQuiz());

