import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateUserForm from './Components/CreateUserForm';
import UserDetailComponent from './Components/UserDetailComponent';
import UserComponent from './Components/UserComponent';
import Register from './Components/Auth/Register';
import Login from './Components/Auth/Login';
import MainPage from './Components/Reservation/MainPage';
import LocalDetails from "./Components/Reservation/LocalDetails";
import MyProfile from "./Components/Profile/MyProfile";
import RegisterForm from "./Components/Auth/RegisterForm";

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:id" element={<MainPage />} />
        <Route path="/User/:id" element={<UserDetailComponent />} />
        <Route path="/User" element={<UserComponent />} />
        <Route path="/CreateUser" element={<CreateUserForm />} />
        <Route path="/Auth/Login" element={<Login />} />
        <Route path="/Auth/Register" element={<Register />} />
        <Route path="/Register" element={<RegisterForm />} />
        <Route path="/Local/:id" element={<LocalDetails />} />
        <Route path="/Profile/:id" element={<MyProfile />} />
      </Routes>
    </Router>
  );
};

export default App;