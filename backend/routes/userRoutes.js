const express = require("express");
const adminAuthMiddleware = require("../middlewares/authMiddleware");
const userController = require("../controllers/userController");
const router = express.Router();

router.get("/users", userController.getAllUser);
router.delete("/user/:id", userController.deleteUser);

module.exports = router;
