import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import TypeList from "./Component/TypeList";
import Navbar from "./Component/Navbar";
import CardList from "./Component/CardList"
import FilterButton from "./Component/FilterButton";
import Footer from "./Component/Footer";
const MainPage = () => {
  const [cookieValue, setCookieValue] = useState(Cookies.get('UserId') || '');
  const[searchContent,setSearchContent]=useState('');
  const navigate = useNavigate();

  
  const handleLogout = () => {
    Cookies.remove('UserId');
    setCookieValue('');
  };

  const handleLogin = () => {
    navigate('/Auth/Login'); 
  };
    const searchChange = (event) => {
        setSearchContent(event.target.value);
    };
    return (
      <div className="container">
          <Navbar cookie={Cookies} cookieValue={cookieValue}  handleLogin={handleLogin} handleLogout={handleLogout} />
          <div className="row container mt-5 justify-content-center">
              <div className="row">
                  <div className="col-9"> <TypeList/></div>
                  <div className="col-3"><FilterButton searchChange={searchChange}/></div>
              </div>
              <CardList searchContent={searchContent}/>
          </div>
          <Footer/>
      </div>  );
};

export default MainPage;
