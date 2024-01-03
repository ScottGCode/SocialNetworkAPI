const router = require('express').Router(); 

const { 
    addReaction,
    deleteReaction
} = require('../../controllers/reaction-controllers');

router.route('/:thoughtId/reactions').post(addReaction);
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router; 