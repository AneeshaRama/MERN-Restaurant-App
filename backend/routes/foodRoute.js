const express = require("express");
const foodController = require("../controllers/foodController");
const router = express.Router();

router.post("/food/new", foodController.addFood);
router.get("/foods", foodController.getAllFoods);
router.get("/food/:id", foodController.getFoodDetails);
router.put("/food/:id", foodController.updateFood);
router.delete("/food/:id", foodController.deleteFood);

module.exports = router;
