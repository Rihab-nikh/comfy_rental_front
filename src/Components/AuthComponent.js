import React, { useState } from 'react';
import CreateUserForm from './CreateUserForm'; // Import CreateUserForm component

const AuthComponent = () => {
  const [activeTab, setActiveTab] = useState('login');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      {/* Pills navs */}
      <ul className="nav nav-pills nav-justified mb-3" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${activeTab === 'login' ? 'active' : ''}`}
            onClick={() => handleTabChange('login')}
          >
            Login
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${activeTab === 'register' ? 'active' : ''}`}
            onClick={() => handleTabChange('register')}
          >
            Register
          </button>
        </li>
      </ul>
      {/* Pills content */}
      <div className="tab-content">
        <div
          className={`tab-pane fade show ${activeTab === 'login' ? 'active' : ''}`}
          role="tabpanel"
        >
          {/* Login form */}
          <form>
            {/* Form fields for login */}
          </form>
        </div>
        <div
          className={`tab-pane fade ${activeTab === 'register' ? 'active' : ''}`}
          role="tabpanel"
        >
          {/* Registration form */}
          <CreateUserForm />
        </div>
      </div>
    </div>
  );
};

export default AuthComponent;
