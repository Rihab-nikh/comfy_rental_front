// Layout.js
import React from 'react';
import Navbar from './Navbar';
import Footer from "./Footer";

const Layout = ({ children, cookie, cookieValue, handleLogin, handleLogout }) => {
  return (
    <div>
      <Navbar cookie={cookie} cookieValue={cookieValue} handleLogin={handleLogin} handleLogout={handleLogout} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
