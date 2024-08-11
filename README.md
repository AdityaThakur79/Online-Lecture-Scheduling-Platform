Project Overview: Online Lecture Scheduling Platform
Purpose:
The platform is designed to streamline the process of scheduling lectures for an online education platform. It enables administrators to manage instructors, courses, and lectures efficiently.

Key Features:

Admin Panel:

Instructor Management: Admins can view a list of all instructors, add new instructors, and manage their details.
Course Management: Admins can add and manage courses, including details like the course name, level, description, and associated images.
Lecture Scheduling: Admins can create and manage lectures (batches) for different courses. Lectures can be scheduled by selecting a date and assigning an instructor.
Instructor Assignment Logic:

Exclusive Assignment: Once an instructor is assigned to a lecture on a specific date, they cannot be assigned to another lecture on the same date. This ensures there are no scheduling conflicts.
Dynamic Instructor List: When scheduling a lecture, only instructors who are not already assigned to another lecture on the chosen date are displayed in the dropdown menu.

Technology Stack:

Frontend: React.js for building the user interface, ensuring a dynamic and responsive experience.
Backend: Node.js with Express for handling server-side operations and API endpoints.
Database: MongoDB for storing data related to instructors, courses, and lectures.
Overall Architecture: MERN (MongoDB, Express, React, Node.js) stack, providing a seamless integration between the frontend and backend.

Basic Routes:

Home : http://localhost:5173/
Courses : http://localhost:5173/courses
About : http://localhost:5173/about


AUTH ROUTES:

Register : http://localhost:5173/register
Login : http://localhost:5173/login
Profile : http://localhost:5173/account

User Dashboard: http://localhost:5173//:id/dashboard
Admin: http://localhost:5173/admin
Dashboard: http://localhost:5173/admin/dashboard
AddCourse : http://localhost:5173/admin/addcourse
AddLecture : http://localhost:5173/admin/addlecture

LectureRoute : http://localhost:5173/lectures/:id
