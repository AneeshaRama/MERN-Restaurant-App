import mongoose from "mongoose";

const connectDB = () => {
  if (mongoose.connections[0].readyState) {
    console.log("Already connected to Database.");
    return;
  }
  mongoose
    .connect(process.env.NEXT_PUBLIC_DB)
    .then(() => {
      console.log("Database is successfully connected");
    })
    .catch((err) => {
      console.log(err);
    });
};

export default connectDB;
