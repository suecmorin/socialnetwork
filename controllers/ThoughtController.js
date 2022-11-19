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
    Thought.findOne({ _id: req.params.thoughtId })
      .populate('thoughtText', 'createdAt', 'reactionsCount')
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
    Thought.findOneAndDelete({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json({ message: 'Thought deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
  // Update thought
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
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
    Thought.findOneAndUpdate(
        { _id: req.params.reactionId },
        { $pull: { _id: Thought.reactionId } },
        )
        .then((thought) =>
        !thought
        ? res.status(404).json({ message: 'No reaction with that ID' })
        : res.json({ message: 'Reaction deleted!' }))
        .catch((err) => res.status(500).json(err));
  },
};