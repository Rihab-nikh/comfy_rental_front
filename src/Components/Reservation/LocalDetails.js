import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from '../Local/Images/image1.jpg';
import image2 from '../Local/Images/image2.jpg';
import image3 from '../Local/Images/image3.jpg';
import image4 from '../Local/Images/image4.jpg';

const LocalDetails = () => {
    const { id } = useParams();
    const [local, setLocal] = useState(null);
    const [arrivalDate, setArrivalDate] = useState(null);
    const [departureDate, setDepartureDate] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/local/LocalDetails/${id}`);
                setLocal(response.data)
                console.log(local.imgPathList)
            } catch (error) {
                console.error('Error fetching Local:', error);
            }
        };

        fetchData();
    }, [id]);

    const images = local.imgPathList;
    if (!local) {
        return <div>Loading...</div>;
    }
    return (
        <div className="container bg-light">
            <div className="row">
                <div className="col-9">
                    <h1>{local.name}</h1>
                </div>
                <div className="col-3">
                    <p>Add to favorite</p>
                </div>

            </div>
            <div className="row">
                <div className="col-6">
                    <img className="m-1 img-fluid" src={images[0]} alt="Image 1"/>
                </div>
                <div className="col-6">
                    <div className="row">
                        <div className="col-6">
                            <img className="m-1 img-fluid" src={images[1]} alt="Image 2" />
                        </div>
                        <div className="col-6">
                            <img className="m-1 img-fluid" src={images[2]} alt="Image 3" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <img className="m-1 img-fluid" src={images[3]} alt="Image 4" />
                        </div>
                        <div className="col-6">
                            <img className="m-1 img-fluid" src={images[4]} alt="Image 5" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <div className="m-2">
                        <h3>Detail</h3>
                        <p> {local.descLocal}</p>
                    </div>
                </div>
                <div className="col-6">
                    <div className="card m-2">
                        <div className="card-body">
                        <p className="date-label">Arrival</p>

                            <DatePicker
                            
                                selected={arrivalDate}
                                onChange={date => this.setState({ arrivalDate: date })}
                                placeholderText="Select date"
                            />
                            <div className="booking-option">
                                <p className="date-label">Departure </p>
                                <DatePicker
                                    selected={departureDate}
                                    onChange={date => this.setState({ departureDate: date })}
                                    placeholderText="Select date"
                                />
                            </div>
                            <div class="subtotal-section">
                                <p class="subtotal">{local.price} € Per night</p>
                                
                            </div>
                            
                            <div class="reservation-section">
                                <button class="reserve-button">Réserver</button>
                                <p class="reservation-info">Aucun montant ne vous sera débité pour le moment</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LocalDetails;
