const Users = require("../models/userModel");
const jwt = require("jsonwebtoken");

const adminAuthMiddleware = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token)
    return res.status(400).json({ message: "Please login to continue" });

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  if (!decoded)
    return res.status(400).json({ message: "Invalid Authentication." });

  const user = await Users.findOne({ _id: decoded._id });
  if (user.role !== "admin") {
    return res.status(400).json({ message: "You are not authorized" });
  }
  next();
};

module.exports = adminAuthMiddleware;
