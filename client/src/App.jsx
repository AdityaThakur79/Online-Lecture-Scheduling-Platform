import React from 'react'
import Header from './components/header/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import "./App.css"
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import About from './pages/about/About'
import Account from './pages/account/Account'
import { InstructorData } from './context/InstructorContext'
import Loading from './components/loading/Loading'
import Course from './pages/courses/Course'
import Lectures from './pages/lecture/Lectures'
import { CourseData } from './context/CourseContext'
import InstructorDashboard from './pages/InstructorDashboard/InstructorDashboard'
import AdminDashboard from './pages/admin/AdminDashboard'
import AddCourse from './pages/admin/AddCourse'
import AddLecture from './pages/admin/AddLecture'
import Dashboard from './pages/admin/Dashboard'


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
