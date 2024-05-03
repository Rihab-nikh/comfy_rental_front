import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Component/Navbar";
import Cookies from "js-cookie";
import Footer from "./Component/Footer";
import ProfileCard from "./Component/ProfileCard";


const LocalDetails = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');
    const { id } = useParams();
    const [local, setLocal] = useState(null);
    const [cookieValue, setCookieValue] = useState(Cookies.get('UserId') || '');
    const navigate = useNavigate();
    const [localId, setLocalId] = useState(null);
    const [userId, setUserId] = useState(null);

    const BookingHandler=(e,navigate)=>{
        if (!cookieValue) {
            navigate('/Auth/Login');
        }
        else {
            setUserId(cookieValue);
            handleBooking(e);
        }
    }
    const handleLogout = () => {
        Cookies.remove('UserId');
        setCookieValue('');
    };

    const handleLogin = () => {
        navigate('/Auth/Login');
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/local/LocalDetails/${id}`);
                setLocal(response.data);
                setLocalId(response.data.localId);
            } catch (error) {
                console.error('Error fetching Local:', error);
            }
        };
        fetchData();
    }, [id]);
    const handleBooking = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/Reservations/save', {
                localId, userId
            });
            if (response.data){
                setShowPopup(true);
                setPopupMessage(response.data);
            }
            else {
                setShowPopup(true);
                setPopupMessage('Error ReBook :(');
            }
        }catch (error) {

            setShowPopup(true);
            setPopupMessage('Connexion Error');

        }
    }

    if (!local) {
        return <div><h1>Loading ....</h1></div>;
    }
    else {
        const images = local.imgPathList;

        return (
            <div className="container">
                <Navbar cookie={Cookies} cookieValue={cookieValue}  handleLogin={handleLogin} handleLogout={handleLogout} />
                <div className="pt-4">
                    <div className="container mt-5">
                        <div className="row mt-5">
                            <div className="col-9">
                                <h1 className="m-2">{local.name}</h1>
                            </div>
                            <div className="col-3  text-end">
                                <a className=" btn my-2 btn-outline-danger">
                                <i className="bi bi-heart mx-2"></i>Favorite
                                </a>
                            </div>

                        </div>

                        <div className="row m-3 border-1">
                            <div className="col-6">
                                <img style={{width: "40em", height: "28.5em"}} className="m-1 rounded-1 img-fluid"
                                     src={images[0]} alt="Image 1"/>
                            </div>
                            <div className="col-6">
                                <div className="row">
                                    <div className="col-6">
                                        <img style={{width: "40em", height: "14em"}} className="m-1 rounded-1 img-fluid"
                                             src={images[1]} alt="Image 2"/>
                                    </div>
                                    <div className="col-6">
                                        <img style={{width: "40em", height: "14em"}} className="m-1 rounded-1 img-fluid"
                                             src={images[2]} alt="Image 3"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <img style={{width: "40em", height: "14em"}} className="m-1 rounded-1 img-fluid"
                                             src={images[3]} alt="Image 4"/>
                                    </div>
                                    <div className="col-6">
                                        <img style={{width: "40em", height: "14em"}} className="m-1 rounded-1 img-fluid"
                                             src={images[4]} alt="Image 5"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <div className="m-2 row">
                                    <h3>Detail</h3>
                                    <p> {local.descLocal}</p>
                                    <p><span className="fw-bold">Adresse</span> : {local.addresse} </p>
                                    <p><span className="fw-bold">City</span> : {local.city} </p>
                                </div>
                            <ProfileCard name={local.hostName} imgSrc={local.hostPic}/>
                            </div>
                            <div className="col-6 p-2">
                                <div className="card h-100 " >
                                    <div className="row card-body">
                                        <div className="col-6">
                                            <h6 className="form-text">Arrival</h6>
                                            <DatePicker
                                                className=" form-control"
                                                selected={local.dateStart}
                                                onChange={date => this.setState({arrivalDate: date})}
                                                placeholderText={local.dateStart}
                                            />
                                        </div>
                                        <div  className="col-6">
                                            <h6 className="form-text">Departure</h6>
                                            <DatePicker
                                                className=" form-control"
                                                selected={local.dateEnd}
                                                onChange={date => this.setState({departureDate: date})}
                                                placeholderText={local.dateEnd}
                                            />
                                        </div>
                                        <hr/>

                                        <div className="row">

                                            <div className="subtotal-section">
                                                {showPopup && (
                                                    <div className="row alert ms-2 alert-dark" role="alert">
                                                        {popupMessage}
                                                    </div>
                                                )}
                                                <h5 className="text-end"><span className="fw-bold">{local.price}</span> € Per night</h5>

                                            </div>

                                            <div className="text-end">
                                                <button onClick={(e) => BookingHandler(e,navigate)}  className=" btn btn-outline-dark ">Book now</button>
                                                <p className="text-start">No amount will be charged to you at the moment.</p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <Footer/>
            </div>
        );
    }

}

export default LocalDetails;
