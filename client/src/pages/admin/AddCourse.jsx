import React, { useState } from 'react';
import axios from 'axios';
import './Admin.css';
import { server } from '../../main';

const AddCourse = () => {
  const [formData, setFormData] = useState({
    name: '',
    level: '',
    description: '',
    image: null,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, level, description, image } = formData;

    const formDataToSend = new FormData();
    formDataToSend.append('name', name);
    formDataToSend.append('level', level);
    formDataToSend.append('description', description);
    if (image) formDataToSend.append('image', image); // Ensure 'image' matches field name

    setLoading(true);
    try {
      const response = await axios.post(`${server}/api/course/new`, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
          token: localStorage.getItem('token'),
        },
      });
      alert(response.data.message);
      setFormData({
        name: '',
        level: '',
        description: '',
        image: null,
      });
    } catch (error) {
      setError('Failed to create course. Please try again.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-course-container">
      <h2>Create New Course</h2>
      <form onSubmit={handleSubmit} className="course-form">
        <label>
          Course Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Level:
          <input
            type="text"
            name="level"
            value={formData.level}
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
          Course Image:
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit" disabled={loading}>
          {loading ? 'Creating...' : 'Create Course'}
        </button>
        {error && <p className="error-text">{error}</p>}
      </form>
    </div>
  );
};

export default AddCourse;
