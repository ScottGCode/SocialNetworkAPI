const { Schema, model, Types } = require('mongoose');
const formatDate = require('../utils/formatDate'); 

const ReactionSchema = new Schema ({
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
    createdAt : {
        type: Date,
        default: Date.now,
        get: dateVal => formatDate(dateVal)
    }
},
    {
        toJSON: {
            getters: true,
        }
    });

const Reaction = model ('Reaction', ReactionSchema);

module.exports = Reaction; 