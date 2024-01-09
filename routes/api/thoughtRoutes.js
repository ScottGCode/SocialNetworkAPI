// define Thought routes 
const router = require('express').Router();

const {
    getThoughts,
    addThought,
    getThoughtById,
    updateThought,
    deleteThought
} = require('../../controllers/thought-controllers');

const { 
    addReaction,
    deleteReaction
} = require('../../controllers/thought-controllers');

// Thought routes 
router.route('/').get(getThoughts).post(addThought);
router.route('/:thoughtId').get(getThoughtById).put(updateThought).delete(deleteThought);

// Reaction routes 
router.route('/:thoughtId/reactions').post(addReaction);
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router; 