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
![Home](https://github.com/user-attachments/assets/e8b7ae1c-9443-4820-b33e-7d6485aa653b)

Courses : http://localhost:5173/courses
![courses](https://github.com/user-attachments/assets/1ad7b61a-d087-45f2-a638-8b2f3ec631cb)

About : http://localhost:5173/about
![about](https://github.com/user-attachments/assets/bce44ef4-6f0c-4d05-8be5-373745618e7d)


AUTH ROUTES:

Register : http://localhost:5173/register
![register](https://github.com/user-attachments/assets/fd00b504-6dc1-4f7e-af5d-49f16d228109)

Login : http://localhost:5173/login
![login](https://github.com/user-attachments/assets/220461f2-70d8-42d7-92b6-39eb8052ac60)

Profile : http://localhost:5173/account

![userdashboard](https://github.com/user-attachments/assets/bf18fb37-bb0a-4014-ac1b-5bbff926c531)

Profile for admin:
![admin](https://github.com/user-attachments/assets/e6cc8eec-50a7-43f8-b84a-30888cb415d3)


Instructor Dashboard: http://localhost:5173//:id/dashboard
![instrcutordash](https://github.com/user-attachments/assets/9eaf9d86-fd08-471c-8bfc-c63ad8a3395a)

Admin: http://localhost:5173/admin
![admindash](https://github.com/user-attachments/assets/49f28539-5209-4673-8cfe-8ab05a4802a4)

Dashboard: http://localhost:5173/admin/dashboard
![stats](https://github.com/user-attachments/assets/03b96315-b3e3-4186-9a93-e93f0827bb41)

AddCourse : http://localhost:5173/admin/addcourse
![addcourse](https://github.com/user-attachments/assets/e80f472f-ba34-4998-a96f-96446a44c589)

AddLecture : http://localhost:5173/admin/addlecture
![addlecture](https://github.com/user-attachments/assets/1f40ed41-013b-4c1f-93f1-6c9a8a3b52c8)


LectureRoute : http://localhost:5173/lectures/:id
![Uploading courselecture.PNG…]()

