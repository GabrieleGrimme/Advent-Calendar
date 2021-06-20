import express from 'express';

import {
  getQuizzes,
  getQuizId,
  postQuiz,
  updateQuiz,
  deleteQuiz,
} from '../controller/quiz.controller.js';

const router = express.Router();

router.get('/quizzes', getQuizzes);
router.get('/quizzes/:quizId', getQuizId);
router.post('/quizzes', postQuiz);
router.put('/quizzes/:quizId', updateQuiz);
router.delete('/quizzes/:quizId', deleteQuiz);

export default router;
