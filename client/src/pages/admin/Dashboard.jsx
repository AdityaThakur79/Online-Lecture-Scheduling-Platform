import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Admin.css'; // Import the CSS file for styling
import { server } from '../../main';

const Dashboard = () => {
  const [stats, setStats] = useState({ totalCourses: 0, totalLectures: 0, totalInstructors: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get(`${server}/api/stats`, {
          headers: {
            token: localStorage.getItem('token'),
          },
        });
        setStats(response.data.stats);
      } catch (err) {
        setError('Failed to fetch stats. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) return <p>Loading stats...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="stats-cards">
      <div className="card">
        <h3>Total Courses</h3>
        <p>{stats.totalCourses}</p>
      </div>
      <div className="card">
        <h3>Total Lectures</h3>
        <p>{stats.totalLectures}</p>
      </div>
      <div className="card">
        <h3>Total Instructors</h3>
        <p>{stats.totalInstructors}</p>
      </div>
    </div>
  );
};

export default Dashboard;
