const mongoose = require("mongoose");

const commentSchema = mongoose.Schema(
  {
    discussionId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Discussion",
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    text: {
      type: String,
      required: true,
    },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  {
    timestamps: true,
  }
);

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
