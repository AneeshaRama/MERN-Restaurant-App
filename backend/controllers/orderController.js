const Orders = require("../models/orderModel");
const Users = require("../models/userModel");
const { makeOrderErrorHandler } = require("../utils/errorHandler");

const orderController = {
  makeOrder: async (req, res) => {
    try {
      const { name, email, foodName, address } = req.body;
      const errorMessage = makeOrderErrorHandler(
        name,
        email,
        foodName,
        address
      );
      if (errorMessage) return res.status(400).json({ message: errorMessage });
      const user = await Users.findOne({ email });
      if (!user)
        return res
          .status(400)
          .json({ message: "wrong email address.Please retry" });
      await new Orders({ name, email, foodName, address }).save();
      res.status(201).json({
        message: "You have successfully placed order",
      });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  getAllOrders: async (req, res) => {
    try {
      const orders = await Orders.find();
      res.status(200).json({ orders });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  deleteOrder: async (req, res) => {
    try {
      let order = await Orders.findById(req.params.id);
      await order.remove();
      res.status(200).json({ message: "Successfully delivered" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};

module.exports = orderController;
