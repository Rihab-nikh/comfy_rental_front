import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import TypeList from "./Component/TypeList";
import Navbar from "./Component/Navbar";
import CardList from "./Component/CardList"
import FilterButton from "./Component/FilterButton";
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
      <div className="container">
          <Navbar cookie={cookieValue}  handleLogin={handleLogin} handleLogout={handleLogout} />
          <div className="row container mt-5 justify-content-center">
              <div className="row">
                  <div className="col-9"> <TypeList/></div>
                  <div className="col-3"><FilterButton/></div>
              </div>
              <CardList/>
              <div className="col-md-8">
                  <h1>Welcome to Dashboard</h1>
                  <p>UserId: {cookieValue}</p>
                  {cookieValue ? (
                      <button onClick={handleLogout} className="btn btn-danger">
                          Logout
                      </button>
                  ) : (
                      <button onClick={handleLogin} className="btn btn-primary">
                          Login
                      </button>
                  )}
              </div>
          </div>
      </div>  );
};

export default MainPage;
