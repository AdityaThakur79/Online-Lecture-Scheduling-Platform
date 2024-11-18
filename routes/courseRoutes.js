import express from "express";
import { fetchAllLectures, getAllCourses, getSingleCourse,getMyLectures } from "../controllers/courseController.js";
import { isAuth } from "../middlewares/auth.js";
import lectureModel from "../models/lectureModel.js";
 

const router = express.Router();

router.get("/course/all" , getAllCourses);
router.get("/course/:id" , getSingleCourse);
router.get("/lectures/:id" , fetchAllLectures);
router.get("/mylectures" , isAuth,getMyLectures);

// Fetch all lectures for a specific course
router.get('/api/courses/:courseId/lectures', async (req, res) => {
    const { courseId } = req.params;

    try {
        // Find all lectures associated with the course
        const lectures = await lectureModel.find({ course: courseId });
        
        res.status(200).json({ lectures });
    } catch (error) {
        res.status(400).json({ message: 'Error fetching lectures', error });
    }
});



export default router;