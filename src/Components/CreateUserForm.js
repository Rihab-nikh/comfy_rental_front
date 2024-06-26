import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const CreateUserForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [imgPath, setImgPath] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/Auth/save', {
        idU: '',
        firstName,
        lastName,
        email,
        password,
        imgPath
      });
      console.log('New User created:', response.data);
    } catch (error) {
      console.error('Error creating new User:', error);
    }
  };

  return (
      <section className="h-100 gradient-custom-2">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-9 col-xl-7">
              <div className="card">
                <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#000', height: '200px' }}>
                  <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                         alt="Generic placeholder image" className="img-fluid img-thumbnail mt-4 mb-2"
                         style={{ width: '150px', zIndex: '1' }}/>
                    <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-dark"
                            data-mdb-ripple-color="dark"
                            style={{ zIndex: '1' }}>
                      Edit profile
                    </button>
                  </div>
                  <div className="ms-3" style={{ marginTop: '130px' }}>
                    <h5>Andy Horwitz</h5>
                    <p>New York</p>
                  </div>
                </div>
                <div className="p-4  text-black" style={{ backgroundColor: '#f8f9fa' }}>
                </div>
                <div className="card-body p-4 text-black">
                  <div className="mb-5">
                    <p className="lead fw-normal mb-1">About</p>
                    <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                      <p className="font-italic mb-1">Web Developer</p>
                      <p className="font-italic mb-1">Lives in New York</p>
                      <p className="font-italic mb-0">Photographer</p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <p className="lead fw-normal mb-0">Recent photos</p>
                    <p className="mb-0"><a href="#!" className="text-muted">Show all</a></p>
                  </div>
                  <div className="row g-2">
                    <div className="col mb-2">
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
                           alt="image 1" className="w-100 rounded-3"/>
                    </div>
                    <div className="col mb-2">
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                           alt="image 1" className="w-100 rounded-3"/>
                    </div>
                  </div>
                  <div className="row g-2">
                    <div className="col">
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp"
                           alt="image 1" className="w-100 rounded-3"/>
                    </div>
                    <div className="col">
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
                           alt="image 1" className="w-100 rounded-3"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default CreateUserForm;
