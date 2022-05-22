const Users = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { registerValid } = require("../utils/authValid");

const authController = {
  register: async (req, res) => {
    try {
      const { name, email, password, cf_password } = req.body;
      const errorMessage = registerValid(name, email, password, cf_password);
      if (errorMessage) return res.status(400).json({ message: errorMessage });
      const userExists = await Users.findOne({ email });
      if (userExists) {
        return res
          .status(400)
          .json({ message: "This email is already in use" });
      }
      const hashedPassword = await bcrypt.hash(password, 12);
      await new Users({
        name,
        email,
        password: hashedPassword,
      }).save();
      res.status(201).json({
        message: "You have successfully registered. Please login now",
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = authController;
