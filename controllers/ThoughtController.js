const { User, Thought} = require('../models');

module.exports = {
  // Get all thoughts
  getThought(req, res) {
    Thought.find()
      .then(() => res.json(thought))
      .catch((err) => res.status(500).json(err));
  },
  // Get a single thought
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.userId })
      .select('thoughtText', 'createdAt', 'reactionsCount')
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json(thought)
        )
      .catch((err) => res.status(500).json(err));
  },

  // Create a new thought
  createThought(req, res) {
    Thought.create(
    { thoughtText: req.body },
    { $push: { _id: User.thought } },
    )
    .then((thought) => res.json(thought))
    .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
    });
   },

  // Delete a thought
  deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.userId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json({ message: 'Thought deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
  // Update thought
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: { thoughtText: req.param.body } },
      { runValidators: true, new: true },
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with this id!' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
    },
createReaction(req, res) {
    Thought.create(
        { reactionBody: req.body },
        { $push: { _id: Thought.reactions } },
        )
        .then((reaction) => res.json(reaction))
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        });
    },
deleteReaction(req, res) {
    Thought.findOneAndDelete(
        { _id: req.params.userId }
        { pull: (:_id: )}
        )
        .then((thought) =>
        !thought
        ? res.status(404).json({ message: 'No thought with that ID' })
        : res.json({ message: 'Thought deleted!' }))
        .catch((err) => res.status(500).json(err));
      },
};