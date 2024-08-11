import mongoose from "mongoose";
import colors from "colors";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Database Connected Successfully".bgGreen.white);
  } catch (error) {
    console.log(error.bgRed.white);
  }
};
