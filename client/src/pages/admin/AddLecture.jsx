import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Admin.css';
import { server } from '../../main';

const AddLecture = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    startTime: '',
    endTime: '',
    selectedCourse: '', // This will store the selected course ID
    selectedInstructor: '',
  });
  const [courses, setCourses] = useState([]);
  const [instructors, setInstructors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch available courses
    const fetchCourses = async () => {
      try {
        const response = await axios.get(`${server}/api/course/all`);
        setCourses(response.data.courses);
      } catch (err) {
        console.error('Failed to fetch courses', err);
        setError('Failed to fetch courses. Please try again later.');
      }
    };

    // Fetch available instructors
    const fetchInstructors = async () => {
      try {
        const response = await axios.get(`${server}/api/allinstructors`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}` // Include token if required
          }
        });
        setInstructors(response.data.instructors);
      } catch (err) {
        console.error('Failed to fetch instructors', err);
        setError('Failed to fetch instructors. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
    fetchInstructors();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Log the selected course and instructor IDs for debugging
    console.log('Selected Course ID:', formData.selectedCourse);
    console.log('Selected Instructor ID:', formData.selectedInstructor);

    const { title, description, startTime, endTime, selectedCourse, selectedInstructor } = formData;

    const formDataToSend = new FormData();
    formDataToSend.append('title', title);
    formDataToSend.append('description', description);
    formDataToSend.append('startTime', startTime);
    formDataToSend.append('endTime', endTime);
    formDataToSend.append('selectedInstructor', selectedInstructor); // Ensure this is the correct instructor ID

    setLoading(true);
    try {
      const response = await axios.post(`${server}/api/course/${selectedCourse}`, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${localStorage.getItem('token')}`, // Include token if required
        },
      });
      alert(response.data.message);
      setFormData({
        title: '',
        description: '',
        startTime: '',
        endTime: '',
        selectedCourse: '',
        selectedInstructor: '',
      });
    } catch (error) {
      setError('Failed to create lecture. Please try again.');
      console.error('Error details:', error.response ? error.response.data : error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-lecture-container">
      <h2>Create New Lecture</h2>
      <form onSubmit={handleSubmit} className="lecture-form">
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Start Time:
          <input
            type="datetime-local"
            name="startTime"
            value={formData.startTime}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          End Time:
          <input
            type="datetime-local"
            name="endTime"
            value={formData.endTime}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Select Course:
          <select
            name="selectedCourse"
            value={formData.selectedCourse}
            onChange={handleChange}
            required
          >
            <option value="">Select a course</option>
            {courses.map((course) => (
              <option key={course._id} value={course._id}>
                {course.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Select Instructor:
          <select
            name="selectedInstructor"
            value={formData.selectedInstructor}
            onChange={handleChange}
            required
          >
            <option value="">Select an instructor</option>
            {instructors.map((instructor) => (
              <option key={instructor._id} value={instructor._id}>
                {instructor.name}
              </option>
            ))}
          </select>
        </label>
        <button type="submit" disabled={loading}>
          {loading ? 'Creating...' : 'Create Lecture'}
        </button>
        {error && <p className="error-text">{error}</p>}
      </form>
    </div>
  );
};

export default AddLecture;
