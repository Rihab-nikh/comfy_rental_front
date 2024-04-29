import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [imgPath, setImgPath] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const navigate = useNavigate();
  const [cookieValue] = useState(Cookies.get('UserId') || '');

  useEffect(() => {
    const cookieValue = Cookies.get('UserId');
    if (cookieValue) {
      if (cookieValue !== null) {
        console.log("Cookie 'UserId' exists with value:", cookieValue);
        navigate('/');
      }
    }
  }, [cookieValue]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/Auth/save', {
        idU: '',
        firstName,
        lastName,
        email,
        password,
        imgPath, 
      });

      if (
        response.data === 'Image already exist' ||
        response.data === 'Email Already Exist' ||
        response.data === 'Error'
      ) {
        setShowPopup(true);
        setPopupMessage(response.data);
      } else {
        Cookies.set('UserId', response.data);
        Cookies.set('UserFN', firstName);
        Cookies.set('UserLN', lastName);
        Cookies.set('UserEm', email);
        navigate('/');
      }
    } catch (error) {
      console.error('User:', error.message, 'test');
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
              <h1 className="mb-4 text-center title mb-3">Register</h1>
              <ImageUpload setImgPath={setImgPath} />

              <form onSubmit={handleSubmit}>
                <div className="row mb-4">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="firstName">First Name<span className="text-danger">*</span></label>
                      <input
                        type="text"
                        id="firstName"
                        className="form-control"
                        required
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="lastName">Last Name<span className="text-danger">*</span></label>
                      <input
                        type="text"
                        id="lastName"
                        className="form-control"
                        required
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
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
                <button type="submit" className="btn btn-primary btn-block mb-4">Register</button>
                <div className="form-group">
                  You already have an account. <a href='/Auth/Login' className=''> Login?</a>
                </div>
                {showPopup && (
                  <div className="alert alert-danger" role="alert">
                    {popupMessage}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
//hna l form dyal l image
const ImageUpload = ({ setImgPath }) => {
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:8080/Auth/ProfileImage/upload', formData);
      const imagePath = response.data; 
      setImgPath(imagePath);
    } catch (error) {
      console.error('Error uploading image:', error.message);
    }
  };

  return (
    <div className="form-group mb-4">
      <label htmlFor="imgPath">Image Path</label>
      <input
        type="file"
        id="imgPath"
        className="form-control"
        onChange={handleImageChange}
      />
    </div>
  );
};

export default Register;
