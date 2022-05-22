const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB)
    .then(() => {
      console.log("Database is successfully connected");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDatabase;
