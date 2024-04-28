import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from './Images/image1.jpg';
import image2 from './Images/image2.jpg';
import image3 from './Images/image3.jpg';
import image4 from './Images/image4.jpg';
import './LocalDetails.css';
import DatePicker from "react-datepicker";
import "react-datepicker/src/stylesheets/datepicker.scss";

class LocalDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arrivalDate: null,
            departureDate: null
        };
    }

    render() {
        const images = [image1, image2, image3, image4];

        return (
            <div>
                <div className="title-container">
                    <div>
                        <h1 className="title">Logement entier : hébergement - Larbaa Beni Hassen, Maroc</h1>
                        <h6>6 voyageurs 3 chambres 5 lits 2 salles de bain</h6>
                    </div>
                </div>
                <div className="carousel-wrapper">
                    <div className="carousel-container">
                        <Carousel>
                            {images.map((image, index) => (
                                <Carousel.Item key={index}>
                                    <img
                                        className="d-block w-100 rounded-carousel-image"
                                        src={image}
                                        alt=""
                                    />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </div>
                    <div class="info-container">
    <div class="price-section">
        <p class="price">120 €</p>
        <p class="price-info">par nuit</p>
    </div>
    <div class="booking-section">
        <div class="booking-details">
            <div class="booking-options">
                <div class="booking-option">
                    <p class="date-label">ARRIVÉE</p>
                    <DatePicker
                        selected={this.state.arrivalDate}
                        onChange={date => this.setState({ arrivalDate: date })}
                        placeholderText="Select date"
                    />
                </div>
                <div class="booking-option">
                    <p class="date-label">DÉPART</p>
                    <DatePicker
                        selected={this.state.departureDate}
                        onChange={date => this.setState({ departureDate: date })}
                        placeholderText="Select date"
                    />
                </div>
                <div class="booking-option">
                    <p class="guest-label">VOYAGEURS</p>
                    <select class="guest-select">
                        <option value="1">1 voyageur</option>
                        <option value="2">2 voyageurs</option>
                        <option value="3">3 voyageurs</option>
                        <option value="4">4 voyageurs</option>
                        <option value="5">5 voyageurs</option>
                        <option value="6">6 voyageurs</option>
                    </select>
                </div>
            </div>
        </div>
        
    </div>
    <div class="subtotal-section">
        <p class="subtotal">120 € x 5 nuits</p>
        <button class="price-detail-button">Afficher le détail du prix</button>
        <p class="subtotal-amount">600 €</p>
    </div>
    <div class="service-fee-section">
        <p class="fee-label">Frais de service Airbnb</p>
        <button class="price-detail-button">Afficher le détail du prix</button>
        <p class="fee-amount">102 €</p>
    </div>
    <div class="total-section">
        <p class="total-label">Total</p>
        <p class="total-amount">702 €</p>
    </div>
                        <div class="reservation-section">
                            <button class="reserve-button">Réserver</button>
                            <p class="reservation-info">Aucun montant ne vous sera débité pour le moment</p>
                        </div>                       
                    </div>

                </div>
            </div>
        );
    }
}

export default LocalDetails;
