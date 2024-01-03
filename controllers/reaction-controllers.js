const { Reaction, Thought, User } = require('../models'); 

const reactionController = {
    addReaction({ params, body }, res) {
        Thought.findOneAndUpdate({ _id: params.thoughtId }, {$push: {reactions: body }}, { new: true, runValidators: true })
        .then(dbReaction => {
            if(!dbReaction) {
                res.status(404).json({ message: 'No reaction found with this id' })
                return;
            }
            res.json(dbReaction)
        }).catch(err => res.status(400).json(err))
    },
    deleteReaction({ params }, res) {
        Thought.findOneAndUpdate({ _id: params.thoughtId }, {$pull: {reactions: { reactionId: params.reactionId}}}, { new: true })
        .then(dbReaction => {
            if(!dbReaction) {
                res.status(404).json({ message: 'No reaction found with this id' })
                return;
            }
            res.json(dbReaction)
        }).catch(err => res.status(400).json(err))
    }
};

module.exports = reactionController; 