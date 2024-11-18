import Instructor from "../models/instructorModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import instructorModel from "../models/instructorModel.js";
import lectureModel from "../models/lectureModel.js";
// import sendEmail from "../middlewares/sendEmail.js";

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    //validations
    if (!name) return res.send({ message: "Name is required" });
    if (!email) return res.send({ message: "Email is required" });
    if (!password) return res.send({ message: "Password is required" });

    //existing Instructor
    const existinginstructor = await Instructor.findOne({ email });
    if (existinginstructor)
      return res.status(400).json({
        message: "Instructor Already Registered",
      });

    const hashedPassword = await bcrypt.hash(password, 10);
    const instructor = await new Instructor({
      name,
      email,
      password: hashedPassword,
    });
    instructor.save();
    res
      .status(200)
      .json({ message: "Instructor Registered Successfully", instructor });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const instructor = await Instructor.findOne({ email });

    if (!instructor) {
      return res.status(400).json({
        message: "Invalid Email or Password",
      });
    }

    const matchPassword = await bcrypt.compare(password, instructor.password);

    if (!matchPassword) {
      return res.status(400).json({
        message: "Incorrect Password",
      });
    }
    const token = jwt.sign({ _id: instructor._id }, process.env.SECRET_KEY, { expiresIn: '15d' })
    res
      .status(200)
      .send({message: `Welcome Back ${instructor.name}` , token , instructor});
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
};

export const myProfile = async (req, res) => {
    const instructorProfile = await Instructor.findById(req.instructor._id);
    if (!instructorProfile) {
      return res.status(404).send({ error: 'Instructor not found.' });
  }
    res.json({ instructorProfile});
  };

export const getInstructorLectures = async (req, res) => {
  const { instructorId } = req.params;

  try {
    // Fetch lectures assigned to the given instructor ID
    const lectures = await lectureModel.find({ instructor: instructorId }).populate('course', 'name');

    if (lectures.length === 0) {
      return res.status(404).json({ message: 'No lectures found for this instructor.' });
    }

    res.status(200).json({ lectures });
  } catch (error) {
    console.error('Error fetching lectures:', error);
    res.status(500).json({ message: 'Error fetching lectures', error });
  }
};

export const getAllInstructors = async (req, res) => {
  try {
      const instructors = await instructorModel.find();
      res.status(200).json({
          success: true,
          instructors
      });
  } catch (error) {
      // Handle any errors that occur during the fetch
      res.status(500).json({
          success: false,
          message: 'Failed to fetch instructors',
          error: error.message,
      });
  }
};
