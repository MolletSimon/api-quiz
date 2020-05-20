const express = require('express');
const router = express.Router();
const quizCtrl = require('../controllers/quiz');

/**
 * @route GET /quiz/{id}
 * @group Question
 * @param {id} id.query.required - quiz id
 * @returns {Quiz} question object
 */
router.get('/:id', quizCtrl.getQuiz);

router.post('', quizCtrl.addQuiz);

module.exports = router;
