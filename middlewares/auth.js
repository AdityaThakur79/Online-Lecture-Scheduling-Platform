import jwt from "jsonwebtoken";
import instructorModel from "../models/instructorModel.js";


export const isAuth = async (req, res, next) => {
  try {
    const token = req.headers.token;

    if (!token)
      return res.status(403).json({
        message: "Please Login",
      });

    const decodedData = jwt.verify(token, process.env.SECRET_KEY);

    req.instructor = await instructorModel.findById(decodedData._id);
    console.log(req.instructor);
    
    next();
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: "Login First",
    });
  }
};

export const isAdmin = (req, res, next) => {
    try {
      if (req.instructor.role !== "admin")
        return res.status(403).json({
          message: "You are not admin",
        });
  
      next();
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };