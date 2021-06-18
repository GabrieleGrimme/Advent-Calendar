import express from 'express';

import {
  getQuizs,
  getQuizId,
  postQuiz,
  updateQuiz,
  deleteQuiz,
} from '../controller/quiz.controller.js';

const router = express.Router();

router.get('/quizs', getQuizs);
router.get('/quizs/:quizId', getQuizId);
router.post('/quizs', postQuiz);
router.put('/quizs/:quizId', updateQuiz);
router.delete('/quizs/:quizId', deleteQuiz);

export default router;
