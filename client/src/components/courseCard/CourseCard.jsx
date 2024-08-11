import React from 'react'
import { server } from '../../main'
import "./CourseCard.css"
import { useNavigate } from 'react-router-dom';

const CourseCard = ({ course }) => {

    const navigate = useNavigate();

    const handleSeeLectures = () => {
        const courseId = course._id;
        navigate(`/lectures/${courseId}`);
    };
    return (
        <div className="course-card">
            <img src={`${server}/uploads/${course.image}`} alt="" className="course-image" />
            <h3>{course.name}</h3>
            <p>Levle: {course.level}</p>
            <p>Description: {course.description}</p>

            <button
                 onClick={handleSeeLectures} 
                className="common-btn"
            >
                See Lectures
            </button>
        </div>
    )
}

export default CourseCard
