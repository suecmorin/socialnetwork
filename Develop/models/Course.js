const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
  {
    thought: {
      type: String,
      required: true,
      max_length: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
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
  }
);

const Course = model('thought', thoughtSchema);

module.exports = Thought;
