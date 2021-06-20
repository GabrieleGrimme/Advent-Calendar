import Quiz from '../models/quiz.model.js';

function getQuizzes(req, res) {
  Quiz.find().then((quizzes) => res.json(quizzes));
}

function getQuizId(req, res) {
  const { quizId } = req.params;
  Quiz.findById(quizId)
    .then((quiz) => {
      res.json(quiz);
    })
    .catch((error) => res.status(404).json('An unintended error occured'));
}

function postQuiz(req, res) {
  const quiz = new Quiz({
    question: req.body.question,
    answerA: req.body.answerA,
    answerB: req.body.answerB,
    answerC: req.body.answerC,
    answerD: req.body.answerD,
    rightanswer: req.body.rightanswer,
  });
  quiz
    .save()
    .then((quizSaved) => res.json(quizSaved))
    .catch((error) => res.json(error.message));
}

function updateQuiz(req, res) {
  const { quizId } = req.params;
  const updatedQuiz = req.body;

  Quiz.findByIdAndUpdate(
    { _id: quizId },
    updatedQuiz,
    (error, doc) => {
      if (error) {
        res.json({ message: error });
        return;
      }
      res.json(doc);
    }
  );
}

function deleteQuiz(req, res) {
  const { quizId } = req.params;
  Quiz.findByIdAndRemove({ _id: quizId }, (error, doc) =>
    res.json({
      success: true,
      message: `The quiz ${doc.name} has been deleted.`,
      data: doc,
    })
  );
}

export {
  getQuizzes,
  getQuizId,
  postQuiz,
  updateQuiz,
  deleteQuiz,
};
