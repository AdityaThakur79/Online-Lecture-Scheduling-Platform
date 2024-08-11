import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./dbConfig/db.js";
import colors from "colors";
import cors from "cors";

//Importing Routes
import userRoutes from "./routes/instructorRoutes.js";
import courseRoutes from "./routes/courseRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

//Configure Dotenv
dotenv.config();

//Rest Object
const app = express();

//MIDDLEWARES
app.use(cors());
app.use(express.json());
app.use(cors());

//PORT
const port = process.env.PORT || 8080;

app.use("/uploads", express.static("uploads"));

//USING ROUTES
app.use("/api", userRoutes);
app.use("/api", courseRoutes);
app.use("/api", adminRoutes);

//Run Listen
app.listen(port, () => {
  console.log(`Server is Running on http://localhost:${port}`.bgGreen.white);

  //Database Connection
  connectDB();
});
