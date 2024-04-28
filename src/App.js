import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateUserForm from './Components/CreateUserForm';
import UserDetailComponent from './Components/UserDetailComponent';
import UserComponent from './Components/UserComponent';
import Register from './Components/Auth/Register';
import Login from './Components/Auth/Login';
import MainPage from './Components/MainPage';

const App = () => {

  return (
    <Router>
      <Routes>
      <Route path="/" element={<MainPage />} />
        <Route path="/User/:id" element={<UserDetailComponent />} />
        <Route path="/User" element={<UserComponent />} />
        <Route path="/CreateUser" element={<CreateUserForm />} />
          <Route path="/Auth/Login" element={<Login />} />
        <Route path="/Auth/Register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;