const express = require("express");
const router = express.Router();
const {
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

router
  .route("/:id")
  .get(getUserById)
  .put(protect, updateUser)
  .delete(protect, deleteUser);

module.exports = router;
