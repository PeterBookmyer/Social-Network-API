const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "thoughts",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "friends",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

userSchema
  .virtual("friendCount")
  .get(function () {
    return friends.length;
  });

const user = model("user", userSchema);

module.exports = user;
