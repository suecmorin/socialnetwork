const { Schema, model } = require('mongoose');

const reactionsSchema = new Schema(
  {
  reactionId: { 
    type: Schema.Types.ObjectId, 
    default: () => new Types.ObjectId(), 
  },
  reactionBody: { 
    type:  String, 
    required: true, 
    minlength: 1, 
    maxLength: 280,
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
},
)

const thoughtSchema = new Schema(
   {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1, 
      maxLength: 280,
    },
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
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
  },
);

thoughtSchema.virtual('reactionsCount').get(function () {
  return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
