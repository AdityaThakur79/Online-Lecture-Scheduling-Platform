import courseModel from "../models/courseModel.js";
import lectureModel from "../models/lectureModel.js";
import instructorModel from "../models/instructorModel.js";


export const createCourse = async (req, res) => {
  try {
    console.log(req.file);
    const { name, level, description, createdAt } = req.body;

    const image = req.file ? req.file.filename : '';
    const course = await courseModel.create({
      name,
      level,
      description,
      image,
      createdAt,
    });

    res.status(201).json({
      message: "Course Created Successfully",
      course,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
};

export const createLecture = async (req, res) => {
  try {
    const { title, description, startTime, endTime, instructorId } = req.body;

    // Extract courseId from req.params
    const courseId = req.params.id;

    // Check if the course exists
    const course = await courseModel.findById(courseId);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    // Check if the instructor exists
    const instructor = await instructorModel.findById(instructorId);
    if (!instructor) {
      return res.status(404).json({ message: "Instructor not found" });
    }

    // Check if the instructor is already assigned to another lecture on the same date
    const existingLecture = await lectureModel.findOne({
      instructor: instructorId,
      $or: [
        { startTime: { $lte: new Date(endTime), $gte: new Date(startTime) } },
        { endTime: { $lte: new Date(endTime), $gte: new Date(startTime) } }
      ]
    });

    if (existingLecture) {
      return res.status(400).json({ message: 'Instructor is already assigned to a lecture on this date.' });
    }

    // Create a new lecture
    const lecture = await lectureModel.create({
      title,
      description,
      startTime,
      endTime,
      course: course._id,
      instructor: instructorId
    });

    // Update the course to include this new lecture
    await courseModel.findByIdAndUpdate(course._id, {
      $push: { lectures: lecture._id }
    });

    // Update the instructor to include this new lecture
    await instructorModel.findByIdAndUpdate(instructorId, {
      $push: { lectures: lecture._id }
    });

    res.status(201).json({
      message: "Lecture Added",
      lecture,
      course,
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
};


export const getAllStats =  async (req, res) => {
  const totalCourses = (await courseModel.find()).length;
  const totalLectures = (await lectureModel.find()).length;
  const totalInstructors = (await instructorModel.find()).length;

  const stats = {
    totalCourses,
    totalLectures,
    totalInstructors,
  };

  res.json({
    stats,
  });
};

 
 