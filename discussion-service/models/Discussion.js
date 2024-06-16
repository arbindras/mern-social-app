const mongoose = require("mongoose");

const discussionSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    text: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    hashtags: [String],
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    views: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Discussion = mongoose.model("Discussion", discussionSchema);

module.exports = Discussion;
