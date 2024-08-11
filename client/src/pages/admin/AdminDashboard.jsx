import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Admin.css'; // Import the CSS file for styling

const AdminDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Extract the current tab from the URL path or set default tab
  const currentTab = location.pathname.split('/').pop() || 'dashboard';

  const handleTabChange = (tab) => {
    // Update URL based on the selected tab
    navigate(`/admin/${tab}`);
  };

  return (
    <div className="admin-page">
      <div className="sidebar">
        <button 
          className={`tab-button ${currentTab === 'dashboard' ? 'active' : ''}`}
          onClick={() => handleTabChange('dashboard')}
        >
          Dashboard
        </button>
        <button 
          className={`tab-button ${currentTab === 'addcourse' ? 'active' : ''}`}
          onClick={() => handleTabChange('addcourse')}
        >
          Add Course
        </button>
        <button 
          className={`tab-button ${currentTab === 'addlecture' ? 'active' : ''}`}
          onClick={() => handleTabChange('addlecture')}
        >
          Add Lecture
        </button>
      </div>
      <div className="content-area">
        <div className="welcome-message">
          <h2>Welcome Admin</h2>
        </div>
        <div className="tab-content">
          {currentTab === 'dashboard' && <div className="dashboard">Dashboard Content</div>}
          {currentTab === 'addcourse' && <div className="add-course">Add Course Content</div>}
          {currentTab === 'addlecture' && <div className="add-lecture">Add Lecture Content</div>}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
