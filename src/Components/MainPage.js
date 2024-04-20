import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom'; 

const MainPage = () => {
  const [cookieValue, setCookieValue] = useState(Cookies.get('UserId') || ''); 
  const navigate = useNavigate();

  
  const handleLogout = () => {
    Cookies.remove('UserId');
    setCookieValue('');
  };

  const handleLogin = () => {
    navigate('/Auth/Login'); 
  };

  return (
    <div>
      <h1>Welcome to Dashboard</h1>
      <p>UserId: {cookieValue}</p>
      {cookieValue ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};

export default MainPage;
