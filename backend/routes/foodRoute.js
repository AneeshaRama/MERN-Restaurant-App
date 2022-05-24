const express = require("express");
const foodController = require("../controllers/foodController");
const adminAuthMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/food/new", adminAuthMiddleware, foodController.addFood);
router.get("/foods", foodController.getAllFoods);
router.get("/food/:id", foodController.getFoodDetails);
router.put("/food/:id", adminAuthMiddleware, foodController.updateFood);
router.delete("/food/:id", adminAuthMiddleware, foodController.deleteFood);

module.exports = router;
