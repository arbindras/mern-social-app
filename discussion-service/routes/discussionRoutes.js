const express = require("express");
const router = express.Router();
const {
  createDiscussion,
  getDiscussionsByTag,
  getDiscussionsByText,
  updateDiscussion,
  deleteDiscussion,
} = require("../controllers/discussionController");
const { authMiddleware } = require("../middleware/authMiddleware");

router.route("/").post(authMiddleware, createDiscussion);
router.route("/tag/:tag").get(getDiscussionsByTag);
router.route("/text/:text").get(getDiscussionsByText);
router
  .route("/:id")
  .put(authMiddleware, updateDiscussion)
  .delete(authMiddleware, deleteDiscussion);

module.exports = router;
