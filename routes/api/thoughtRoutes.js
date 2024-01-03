const router = require('express').Router();

const {
    getThoughts,
    addThought,
    getThoughtById,
    updateThought,
    deleteThought
} = require('../../controllers/thought-controllers');

router.route('/').get(getThoughts).post(addThought);
router.route('/:thoughtId').get(getThoughtById).put(updateThought).delete(deleteThought);

module.exports = router; 