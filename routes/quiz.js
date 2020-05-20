const express = require('express');
const router = express.Router();
const quizCtrl = require('../controllers/quiz');
const auth = require('../middleware/auth');
const userMiddleware = require('../middleware/userMiddleware');

/**
 * @route GET /quiz/{id}
 * @group Question
 * @param {id} id.query.required - quiz id
 * @returns {Quiz} quiz object
 */
router.get('/:id', auth, quizCtrl.getQuiz);

/**
 * @route POST /quiz
 * @group Question
 * @body quiz object
 * @returns {Quiz} quiz object
 */
router.post('', auth, quizCtrl.addQuiz);

/**
 * @route POST /quiz
 * @group Question
 * @body quiz object
 * @returns {Quiz} quiz object
 */
router.post('/question/:id', auth, quizCtrl.addQuestionToQuiz);

/**
 * @route PUT /quiz
 * @group Question
 * @body quiz object
 * @returns {Quiz} quiz object
 */
router.put('/:id', auth, quizCtrl.updateQuiz);

/**
 * @route DELETE /quiz/{id}/
 * @group Question
 * @param {id} quiz id
 * @param {Question} question id
 */
router.delete('/:id', auth, quizCtrl.removeQuiz);

/**
 * @route DELETE /quiz/question/{id}/{question}
 * @group Question
 * @param {id} quiz id
 * @param {Question} question id
 */
router.delete('/:id/:question', auth, quizCtrl.removeQuestionFromQuiz);

module.exports = router;
