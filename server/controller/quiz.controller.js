import Quiz from '../models/quiz.model.js';

function getQuizs(req, res) {
  Quiz.find().then((quizs) => res.json(quizs));
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
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    street: req.body.address,
    zip: req.body.zip,
    city: req.body.city,
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
  getQuizs,
  getQuizId,
  postQuiz,
  updateQuiz,
  deleteQuiz,
};
