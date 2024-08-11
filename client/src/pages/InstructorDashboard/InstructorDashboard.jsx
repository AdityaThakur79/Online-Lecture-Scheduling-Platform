import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { server } from '../../main';
import { useParams } from 'react-router-dom';
import InstructorLecturesCard from '../../components/lecturecard/InstructorLecturesCard';
import './InstructorDashboard.css'; // Import the CSS file for styling

const InstructorDashboard = ({ course }) => {
  const { id: instructorId } = useParams(); // Extract instructorId from route params
  const [lectures, setLectures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLectures = async () => {
      if (!instructorId) {
        setError('Instructor ID is missing.');
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(`${server}/api/${instructorId}/lectures`);
        setLectures(response.data.lectures);
      } catch (err) {
        setError('Failed to fetch lectures. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchLectures();
  }, [instructorId]);

  if (loading) return <p className="loading-text">Loading lectures...</p>;
  if (error) return <p className="error-text">Error: {error}</p>;

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Assigned Lectures</h2>
      {lectures.length > 0 ? (
        lectures.map((lecture) => (
          <InstructorLecturesCard key={lecture._id} lecture={lecture} course={course} />
        ))
      ) : (
        <p>No lectures assigned yet.</p>
      )}
    </div>
  );
};

export default InstructorDashboard;
