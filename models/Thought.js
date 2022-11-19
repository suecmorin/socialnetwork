const { Schema, model } = require('mongoose');

const reactionsSchema = new.mongoose.Schema({
  reactionId: { 
    type: Schema.TypesObjectId, 
    default: () => new Types.ObjectId(), 
  },
  reactionBody: { 
    type:  String, 
    required: true, 
    minlength: 1, 
    maxlength: 280,
   },
  username: { 
    type: String, 
    required: true 
  },
  createdAt: { 
    type: Date, 
    default: Date.now,
    get: (val) => moment(val).format('MMM DD, YYYY [at] hh: mm a'),
  },
}),

const thoughtSchema = new.mongoose.Schema({
    
    thoughtText: {
      type: String,
      required: true,
      minlength: 1, 
      maxlength: 280,
    }
    createdAt: {
      type: Date,
      default: Date.now(),
      get: (val) => moment(val).format('MMM DD, YYYY [at] hh: mm a'),
    },
    username: {
        type: String,
        required: true,
      },
    reactions: [reactionsSchema],
  },
  thoughtSchema.virtual('reactionsCount').get(function () {
    return this.reactions.length;
  });
  const timeStamp = createdAt.get(
);

  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
  }
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
