import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [cookieValue] = useState(Cookies.get('UserId') || '');

  useEffect(() => {
    const cookieValue = Cookies.get('UserId');
    if (cookieValue) {
      console.log("Cookie 'UserId' exists with value:", cookieValue);
      navigate('/');
    }
  }, [cookieValue, navigate]);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/Auth/login', {
        email,
        password
      });
      if (response.data) {

        setUser(response.data);
        Cookies.set("UserId", response.data.idU);
        Cookies.set("UserFN", response.data.firstName);
        Cookies.set("UserLN", response.data.lastName);
        Cookies.set("UserEm", response.data.email);
        Cookies.set("UserIM", response.data.imgPath);
        navigate('/');
      } else {
        setShowPopup(true);
        setPopupMessage('Wrong Credentials');
      }

    } catch (error) {

      setShowPopup(true);
      setPopupMessage('Connexion Error');

    }
  };
  return (
    <section className="text-center text-lg-start">
      <div className="card mb-3">
        <div className="row g-0 align-items-center">
          <div className="col-lg-4 d-none d-lg-flex">
            <img
                src="/Images/Register.gif"
              alt="Trendy Pants and Shoes"
              className="w-100 rounded"
            />
          </div>
          <div className="col-lg-8">
            <div className="card-body py-5 px-md-5">
              <h1 className="mb-4 text-center title mb-3">Login :</h1>
              {showPopup && (
                    <div className="alert alert-danger" role="alert">
                      {popupMessage}
                    </div>
                  )}
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-4">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="row mb-4">
                  <div className="col-md-6">
                    <div className="form-group">
                      <button
                        type="submit"
                        className="btn btn-primary btn-block mb-4">
                        Login
                      </button>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      You don't have an account
                      <a href='/Auth/Register' className=''> Register?</a>
                    </div>
                  </div>
                  
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
