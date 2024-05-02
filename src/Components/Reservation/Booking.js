import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom'; 

const BookingComponent = () => {
    const [bookings, setBookings] = useState([]);
    const { id } = useParams(); 

    useEffect(() => {
        axios.get(`http://localhost:8080/Reservations/ShowALL/${id}`)
            .then(response => {
                setBookings(response.data);
                console.log("cheeeeck"+ bookings);
            })
            .catch(error => {
                console.error('Error fetching bookings:', error);
            });
    }, []);

    return (
        <div>
            <h1>All Bookings</h1>
            {Array.isArray(bookings) && bookings.length > 0 ? (
                <ul>
                    {bookings.map(booking => (
                        <li key={booking.idB}>
                            {booking.local && (
                                <p>Price: {booking.local.price}</p>
                            )}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No bookings available</p>
            )}
        </div>
    );
}

export default BookingComponent;
