import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./Home.css"

const Home = () => {
  return (
      <>
      <div>
      <div className="home">
        <div className="home-content">
          <h1>Welcome to EduScheduler</h1>
          <p>Learn, Grow, Excel</p>
          <button onClick={() => navigate("/courses")} className="common-btn">
            Get Started
          </button>
        </div>
      </div>
    </div>
      </>
      
  )
}

export default Home
