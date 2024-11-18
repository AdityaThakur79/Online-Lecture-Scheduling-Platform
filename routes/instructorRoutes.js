import express from "express";
import { getAllInstructors, getInstructorLectures, login, myProfile, register } from "../controllers/instructorController.js";
import { isAdmin, isAuth } from "../middlewares/auth.js";
const router = express.Router();


router.post("/instructor/register" , register);
router.post("/instructor/login" , login);
router.get("/profile/me" ,isAuth, myProfile);
router.get('/:instructorId/lectures', getInstructorLectures);
router.get("/allinstructors", getAllInstructors);

export default router;