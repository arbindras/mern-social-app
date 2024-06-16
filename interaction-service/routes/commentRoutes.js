const express = require("express");
const router = express.Router();
const {
  addComment,
  likeComment,
  updateComment,
  deleteComment,
} = require("../controllers/commentController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").post(protect, addComment);
router.route("/:id/like").post(protect, likeComment);
router.route("/:id").put(protect, updateComment).delete(protect, deleteComment);

module.exports = router;
