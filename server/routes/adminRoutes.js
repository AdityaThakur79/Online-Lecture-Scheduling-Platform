import express from "express";
import { isAuth,isAdmin } from "../middlewares/auth.js";
import { createCourse, createLecture, getAllStats } from "../controllers/adminController.js";
// import { upload } from "../middlewares/multer.js";
import upload from '../middlewares/multer.js';

const router = express.Router();

router.post("/course/new" ,isAuth, isAdmin,upload.single('image'), createCourse);
router.post("/lecture/:id" ,isAuth, isAdmin, createLecture);
router.get("/stats", isAuth, isAdmin, getAllStats);
 
export default router;