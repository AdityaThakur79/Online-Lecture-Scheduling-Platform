import courseModel from "../models/courseModel.js"
import instructorModel from "../models/instructorModel.js";
import lectureModel from "../models/lectureModel.js";

export const getAllCourses = async(req,res) =>{
    const courses = await courseModel.find();
    res.json({
        courses
    });
};

export const getSingleCourse = async(req,res) =>{
    const course = await courseModel.findById(req.params.id);
    res.json({
        course,
    });
};

export const fetchAllLectures =  async (req, res) => {
    
   
        const { id } = req.params; // course ID
      
        try {
          const lectures = await lectureModel.find({ course: id }).populate('instructor', 'name');
          
          if (!lectures.length) {
            return res.status(404).json({ message: 'No lectures found for this course' });
          }
      
          res.status(200).json({ lectures });
        } catch (error) {
          console.error('Error fetching lectures:', error);
          res.status(500).json({ message: 'Error fetching lectures', error });
        }
      };
      
  export const getMyLectures = async (req, res) => {
    const instructor = await instructorModel.findById(req.instructor._id);
    const courses = await courseModel.find({ _id: req.instructor.lectures });
  
    res.json({
      courses,
    });
  };