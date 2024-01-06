const { Schema, model, Types } = require('mongoose');
const { formatTimestamp } = require('../utils/formatDate');

// Reaction Schema 
const ReactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        trim: true,
        maxlength: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: dateVal => formatTimestamp(dateVal)
    }
}, {
    toJSON: {
        getters: true,
    }
});

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
    get: dateVal => formatTimestamp(dateVal)
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
},{
    toJSON: {
        virtuals: true,
        getters: true
    }
});

ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
})

// create thought model and export 
const Thought = model ('Thought', ThoughtSchema);

module.exports = Thought; 