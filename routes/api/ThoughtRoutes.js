const router = require('express').Router();
const {
  getThought,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,

} = require('../../controllers/ThoughtController.js');

// /api/Thought
router.route('/').get(getThought).post(createThought);

// /api/Thought/:_id
router
  .route('/:_id')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
router
  .route('/:_id/reactions')
  .post(createReaction)
  .delete(deleteReaction);

module.exports = router;
