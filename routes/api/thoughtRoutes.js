const router = require('express').Router();
const {
  getThought,
  getSingleThought,
  createThought,
  deleteThought,
  addreaction,
  deletereaction,
  updateThought
} = require('../../controllers/ThoughtController');

// /api/Thought
router.route('/').get(getThought).post(createThought);

// /api/Thought/:ThoughtId
router.route('/:ThoughtId').get(getSingleThought).delete(deleteThought).put(updateThought);

// /api/Thought/:ThoughtId/reaction
router.route('/:ThoughtId/reaction').post(addreaction);

// /api/Thought/:ThoughtId/reaction/:reactionaddreactionId
router.route('/:ThoughtId/reaction/:reactionId').delete(deletereaction);

module.exports = router;
