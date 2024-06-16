const asyncHandler = require("express-async-handler");
const Comment = require("../models/Comment");

// @desc    Add a comment
// @route   POST /api/comments
// @access  Private
const addComment = asyncHandler(async (req, res) => {
  const { discussionId, text } = req.body;

  const comment = new Comment({
    discussionId,
    userId: req.user._id,
    text,
  });

  const createdComment = await comment.save();

  res.status(201).json(createdComment);
});

// @desc    Like a comment
// @route   POST /api/comments/:id/like
// @access  Private
const likeComment = asyncHandler(async (req, res) => {
  const comment = await Comment.findById(req.params.id);

  if (comment) {
    if (comment.likes.includes(req.user._id)) {
      comment.likes = comment.likes.filter(
        (id) => id.toString() !== req.user._id.toString()
      );
    } else {
      comment.likes.push(req.user._id);
    }
    await comment.save();
    res.json(comment);
  } else {
    res.status(404);
    throw new Error("Comment not found");
  }
});

// @desc    Update a comment
// @route   PUT /api/comments/:id
// @access  Private
const updateComment = asyncHandler(async (req, res) => {
  const comment = await Comment.findById(req.params.id);

  if (comment) {
    comment.text = req.body.text || comment.text;
    const updatedComment = await comment.save();
    res.json(updatedComment);
  } else {
    res.status(404);
    throw new Error("Comment not found");
  }
});

// @desc    Delete a comment
// @route   DELETE /api/comments/:id
// @access  Private
const deleteComment = asyncHandler(async (req, res) => {
  const comment = await Comment.findById(req.params.id);

  if (comment) {
    await comment.remove();
    res.json({ message: "Comment removed" });
  } else {
    res.status(404);
    throw new Error("Comment not found");
  }
});

module.exports = {
  addComment,
  likeComment,
  updateComment,
  deleteComment,
};
