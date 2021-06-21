import mongoose from 'mongoose';

const quizSchema = new mongoose.Schema({
  question: String,
  answerA: String,
  answerB: String,
  answerC: String,
  answerD: String,
  rightanswer: String,
});

const Quiz = mongoose.model('Quiz', quizSchema);

export default Quiz;
