const express = require('express');
const router = express.Router();
const quizCtrl = require('../controllers/quiz');

/**
 * @route GET /quiz/{id}
 * @group Question
 * @param {id} id.query.required - quiz id
 * @returns {Quiz} quiz object
 */
router.get('/:id', quizCtrl.getQuiz);

/**
 * @route POST /quiz
 * @group Question
 * @body quiz object
 * @returns {Quiz} quiz object
 */
router.post('', quizCtrl.addQuiz);

/**
 * @route POST /quiz
 * @group Question
 * @body quiz object
 * @returns {Quiz} quiz object
 */
router.post('/question/:id', quizCtrl.addQuestionToQuiz);

/**
 * @route PUT /quiz
 * @group Question
 * @body quiz object
 * @returns {Quiz} quiz object
 */
router.put('/:id', quizCtrl.updateQuiz);

/**
 * @route DELETE /quiz/{id}/
 * @group Question
 * @param {id} quiz id
 * @param {Question} question id
 */
router.delete('/:id', quizCtrl.removeQuiz);

/**
 * @route DELETE /quiz/question/{id}/{question}
 * @group Question
 * @param {id} quiz id
 * @param {Question} question id
 */
router.delete('/:id/:question', quizCtrl.removeQuestionFromQuiz);

module.exports = router;
