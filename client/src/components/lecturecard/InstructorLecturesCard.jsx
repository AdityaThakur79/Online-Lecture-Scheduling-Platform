import React from 'react';
import './InstructorLecturesCard.css'; // Ensure you have this CSS file for styling

const InstructorLecturesCard = ({ lecture }) => {
  return (
    <div className="lecture-card">
      <h3>{lecture.title}</h3>
      <p><strong>Description:</strong> {lecture.description}</p>
      <p><strong>Course:</strong> {lecture.course.name}</p>
      <p><strong>Start Time:</strong> {new Date(lecture.startTime).toLocaleString()}</p>
      <p><strong>End Time:</strong> {new Date(lecture.endTime).toLocaleString()}</p>
    </div>
  );
};

export default InstructorLecturesCard;
