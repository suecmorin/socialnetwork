const { Schema, User } = require('mongoose');
const ThoughtSchema = require('./Thought');

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String, trim: true,
      required: true,
      maxlength: 50,
    },
   email: {
      type: String, unique: true,
      required: true,
      maxLength: 50,
      match: /.+@.+\..+/
    },
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  
    thought: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
      },
    ],
  },
  userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
  });
  
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const User = model('user', userSchema);

module.exports = User;
