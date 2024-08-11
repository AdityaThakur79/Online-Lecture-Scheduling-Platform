import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './Lecture.css'; // Import the CSS for styling

const Lectures  = () => {
  const [lectures, setLectures] = useState([]);
  const { id } = useParams(); // Capture the course ID from the route

  useEffect(() => {
    const fetchLectures = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/lectures/${id}`, {
          headers: {
            token: localStorage.getItem('token'),
          },
        });
        setLectures(response.data.lectures || []);
      } catch (error) {
        console.error('Error fetching lectures:', error);
      }
    };

    fetchLectures();
  }, [id]);

  return (
    <div className="lecture-list">
      <h2 className="heading">Available Lectures</h2>
      {lectures.length > 0 ? (
        <div className="lecture-cards-container">
          {lectures.map((lecture) => (
            <div className="lecture-card" key={lecture._id}>
              <h3>{lecture.title}</h3>
              <p>{lecture.description}</p>
              <p><strong>Start:</strong> {new Date(lecture.startTime).toLocaleString()}</p>
              <p><strong>End:</strong> {new Date(lecture.endTime).toLocaleString()}</p>
              <p><strong>Instructor:</strong> {lecture.instructor.name}</p>
              <div className="button-container">
                <button className="common-btn">
                  See Lecture
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No lectures available for this course.</p>
      )}
    </div>
  );
};

export default Lectures ;
