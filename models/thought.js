const { Schema, model } = require("mongoose");

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      min: 1,
      max: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [
      {
        type: reactionSchema.Types.ObjectId,
        ref: "reaction",
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


thoughtSchema
  .virtual("reactionCount")
  // Getter
  .get(function () {
    return reactions.length;
  });

// Initialize our User model
const thoughts = model("thoughts", thoughtSchema);

module.exports = thoughts;
