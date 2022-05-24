const express = require("express");
const orderController = require("../controllers/orderController");
const router = express.Router();

router.post("/order/new", orderController.makeOrder);
router.get("/orders", orderController.getAllOrders);
router.delete("/orders/:id", orderController.deleteOrder);

module.exports = router;
