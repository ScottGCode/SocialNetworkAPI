const { Schema, model, Types } = require('mongoose');
const { formatTimestamp } = require('../utils/formatDate'); 

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
        get: dateVal => formatTimestamp(dateVal)
    }
},
    {
        toJSON: {
            getters: true,
        }
    });

const Reaction = model ('Reaction', ReactionSchema);

module.exports = Reaction; 