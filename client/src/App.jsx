import React from 'react'
import Header from './components/header/Header.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home.jsx'
import "./App.css"
import Login from './pages/auth/Login.jsx'
import Register from './pages/auth/Register.jsx'
import About from './pages/about/About.jsx'
import Account from './pages/account/Account.jsx'
import { InstructorData } from './context/InstructorContext.jsx'
import Loading from './components/loading/Loading.jsx'
import Course from './pages/courses/Course.jsx'
import Lectures from './pages/lecture/Lectures.jsx'
import { CourseData } from './context/CourseContext.jsx'
import InstructorDashboard from './pages/InstructorDashboard/InstructorDashboard.jsx'
import AdminDashboard from './pages/admin/AdminDashboard.jsx'
import AddCourse from './pages/admin/AddCourse.jsx'
import AddLecture from './pages/admin/AddLecture.jsx'
import Dashboard from './pages/admin/Dashboard.jsx'


const App = () => {

  const { isAuth, instructor, loading ,fetchAllInstructors} = InstructorData();
  const {courses} = CourseData();
  return <>
    {loading ? (
      <Loading />
    ) : (
      <BrowserRouter>
        <Header isAuth={isAuth} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Course />} />
          <Route path="/login" element={isAuth ? <Home /> : <Login />} />
          <Route path="/register" element={isAuth ? <Home /> : <Register />} />
          <Route path="/account" element={isAuth ? <Account instructor={instructor} /> : <Login />} />
          <Route path="/:id/dashboard" element={isAuth ? <InstructorDashboard instructor={instructor} course={courses}/> : <Login />} />
          <Route path="/admin" element={isAuth ? <AdminDashboard   /> : <Login />} />
          <Route path="/admin/dashboard" element={isAuth ? <Dashboard  /> : <Login />} />
          <Route path="/admin/addcourse" element={isAuth ? <AddCourse   /> : <Login />} />
          <Route path="/admin/addlecture" element={isAuth ? <AddLecture   /> : <Login />} />
          <Route path="/lectures/:id" element={isAuth ? <Lectures instructor={instructor} totalInstructors={fetchAllInstructors} /> : <Login />} />
        </Routes>

      </BrowserRouter>)}
  </>
}

export default App
