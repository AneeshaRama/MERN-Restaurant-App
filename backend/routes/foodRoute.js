const express = require("express");
const foodController = require("../controllers/foodController");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/food/new", authMiddleware, foodController.addFood);
router.get("/foods", foodController.getAllFoods);
router.get("/food/:id", foodController.getFoodDetails);
router.put("/food/:id", authMiddleware, foodController.updateFood);
router.delete("/food/:id", authMiddleware, foodController.deleteFood);

module.exports = router;
