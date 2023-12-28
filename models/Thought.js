const { Schema, model, Types } = require('mongoose');
const formatDate = require('../utils/formatDate');

const ThoughtSchema = new Schema ({
thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 208
},
createdAt : {
    type: Date,
    default: Date.now,
    get: dateVal => formatDate(dateVal)
},
username: {
    type: String,
    required: true
},
userId: {
    type: String,
    required: true
},
reactions: [ReactionSchema]
},
{
    toJSON: {
        virtuals: true,
        getters: true
    }
})

ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
})

const Thought = model ('Thought', ThoughtSchema);

module.exports = Thought; 