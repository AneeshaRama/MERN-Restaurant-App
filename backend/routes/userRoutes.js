const express = require("express");
const { adminAuthMiddleware } = require("../middlewares/authMiddleware");
const userController = require("../controllers/userController");
const router = express.Router();

router.get("/users", adminAuthMiddleware, userController.getAllUser);
router.delete("/user/:id", adminAuthMiddleware, userController.deleteUser);

module.exports = router;
