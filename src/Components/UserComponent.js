import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from 'react-router-dom';

const UserComponent = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/Auth/showALL')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error('Error fetching Users:', error);
            });
    }, []);

    return (
        <div>
          <div className="container bg-light ">
              <div className="row">
                <div className="col-9">
                    <h1>Title</h1>
                </div >
                  <div className="col-3">
                      <p>blassa dyal 7lima</p>
                  </div>
              </div>
              <div className="row">
                  <div className="col-6">
                      <img className="m-1 img-fluid" src="https://a0.muscache.com/im/pictures/299cf8e2-cd10-44bb-98a9-adc0f50f7cb0.jpg?im_w=720"/>
                  </div>
                  <div className="col-6">
                      <div className="row">
                          <div className="col-6">
                              <img className="m-1 img-fluid" src="https://a0.muscache.com/im/pictures/299cf8e2-cd10-44bb-98a9-adc0f50f7cb0.jpg?im_w=720"/>
                          </div>
                          <div className="col-6">
                              <img className="m-1 img-fluid" src="https://a0.muscache.com/im/pictures/299cf8e2-cd10-44bb-98a9-adc0f50f7cb0.jpg?im_w=720"/>
                          </div>
                      </div>
                      <div className="row">
                          <div className="col-6">
                              <img className="m-1 img-fluid" src="https://a0.muscache.com/im/pictures/299cf8e2-cd10-44bb-98a9-adc0f50f7cb0.jpg?im_w=720"/>
                          </div>
                          <div className="col-6">
                              <img className="m-1 img-fluid" src="https://a0.muscache.com/im/pictures/299cf8e2-cd10-44bb-98a9-adc0f50f7cb0.jpg?im_w=720"/>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="row">
                  <div className="col-6">
                     <div className="m-2">
                         <h3>Detail</h3>
                         <p>lorem poarhejfjdfkusdfg jkdsfgudsfgjksnjfhsirjzeiojriozjetknfiosh</p>
                     </div>
                  </div>
                  <div className="col-6">
                      <div className="card m-2">
                          <div className="card-body">
                              <h5 className="card-title">For reservation</h5>
                              <p> ghade deri hanaya dakchi li deja endk</p>
                              <input className="row" />
                              <input className="row" /><input className="row" /><input className="row" /><input className="row" />
                              <button>Submit </button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
    );
}

export default UserComponent;
