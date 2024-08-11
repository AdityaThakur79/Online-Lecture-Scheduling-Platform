import React, { useState } from "react";
import "./auth.css";
import { Link, useNavigate } from "react-router-dom";
import { InstructorData } from "../../context/InstructorContext";
// import { CourseData } from "../../context/CourseContext";

const Login = () => {
  const navigate = useNavigate();
  const { btnLoading, loginInstructor } = InstructorData();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const { fetchMyCourse } = CourseData();

  const submitHandler = async (e) => {
    e.preventDefault();
    // await loginUser(email, password, navigate,fetchMyCourse);
    await loginInstructor(email, password, navigate);
  };
  return (
    <div className="auth-page">
      <div className="auth-form">
        <h2>Login</h2>
        <form onSubmit={submitHandler}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="buttonbox">
            <button type="submit" className="common-btn">
              Login
            </button>
          </div>
        </form>
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;