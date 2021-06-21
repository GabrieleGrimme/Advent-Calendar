import User from '../models/user.model.js';

function getUsers(req, res) {
  User.find().then((users) => res.json(users));
}

function getUserId(req, res) {
  const { userId } = req.params;
  User.findById(userId)
    .then((user) => {
      res.json(user);
    })
    .catch((error) => res.status(404).json('An unintended error occured'));
}

function postUser(req, res) {
  const user = new User({
    name: req.body.name,
    vorname: req.body.vorname,
    email: req.body.email,
    datum: new Date(),
  });
  user
    .save()
    .then((userSaved) => res.json(userSaved))
    .catch((error) => res.json(error.message));
}

function updateUser(req, res) {
  const { userId } = req.params;
  const updatedUser = req.body;

  User.findByIdAndUpdate({ _id: userId }, updatedUser, (error, doc) => {
    if (error) {
      res.json({ message: error });
      return;
    }
    res.json(doc);
  });
}

function deleteUser(req, res) {
  const { userId } = req.params;
  User.findByIdAndRemove({ _id: userId }, (error, doc) =>
    res.json({
      success: true,
      message: `The user ${doc.name} has been deleted.`,
      data: doc,
    })
  );
}

export { getUsers, getUserId, postUser, updateUser, deleteUser };
