const asyncHandler = require("express-async-handler");
const Discussion = require("../models/Discussion");

// @desc    Create a new discussion
// @route   POST /api/discussions
// @access  Private
const createDiscussion = asyncHandler(async (req, res) => {
  const { text, image, hashtags } = req.body;

  const discussion = new Discussion({
    userId: req.user._id,
    text,
    image,
    hashtags,
  });

  const createdDiscussion = await discussion.save();

  res.status(201).json(createdDiscussion);
});

// @desc    Get discussions by tag
// @route   GET /api/discussions/tag/:tag
// @access  Public
const getDiscussionsByTag = asyncHandler(async (req, res) => {
  const discussions = await Discussion.find({ hashtags: req.params.tag });
  res.json(discussions);
});

// @desc    Get discussions by text
// @route   GET /api/discussions/text/:text
// @access  Public
const getDiscussionsByText = asyncHandler(async (req, res) => {
  const discussions = await Discussion.find({
    text: { $regex: req.params.text, $options: "i" },
  });
  res.json(discussions);
});

// @desc    Update a discussion
// @route   PUT /api/discussions/:id
// @access  Private
const updateDiscussion = asyncHandler(async (req, res) => {
  const discussion = await Discussion.findById(req.params.id);

  if (discussion) {
    discussion.text = req.body.text || discussion.text;
    discussion.image = req.body.image || discussion.image;
    discussion.hashtags = req.body.hashtags || discussion.hashtags;

    const updatedDiscussion = await discussion.save();
    res.json(updatedDiscussion);
  } else {
    res.status(404);
    throw new Error("Discussion not found");
  }
});

// @desc    Delete a discussion
// @route   DELETE /api/discussions/:id
// @access  Private
const deleteDiscussion = asyncHandler(async (req, res) => {
  const discussion = await Discussion.findById(req.params.id);

  if (discussion) {
    await discussion.remove();
    res.json({ message: "Discussion removed" });
  } else {
    res.status(404);
    throw new Error("Discussion not found");
  }
});

module.exports = {
  createDiscussion,
  getDiscussionsByTag,
  getDiscussionsByText,
  updateDiscussion,
  deleteDiscussion,
};
