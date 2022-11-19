const { User, Thought} = require('../models');

module.exports = {
  // Get all users
  getUser(req, res) {
    User.find()
      .then(() => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  // Get a single user
  getSingleUser(req, res) {
    User.findOne( { _id: req.params.userId } )
      .populate('friends', 'friendCount', 'thought')
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(course)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Create a user
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Delete a user
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : Thought.deleteMany({ _id: { $in: username.thoughtText } })
      )
      .then(() => res.json({ message: 'User and thoughts deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
  // Add friend
  addFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $push: { friends: req.param.body } },
      { runValidators: true, new: true },
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with this id!' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
//delete friend
deleteFriend(req, res) {
  User.findOneAndUpdate(
    { _id: req.params.userId },
    { $pull: { friends: req.param.body} },
    { runValidators: true, new: true },
  )
    .then((user) =>
      !user
        ? res.status(404).json({ message: 'No user with this id!' })
        : res.json(user)
    )
    .catch((err) => res.status(500).json(err));
},
};
