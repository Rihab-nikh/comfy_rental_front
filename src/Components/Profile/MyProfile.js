import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const MyProfile = () => {
    const [user, setUser] = useState(null);
    const { id } = useParams(); //bach nakhod les parametres men URL
    const [parameters, setParameters] = useState(false);
    const navigate = useNavigate();
    const cookieValue = Cookies.get('UserId') || '';
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [myBookings, setMyBookings] = useState(false);
    const [myHostings, setMyHostings] = useState(false);



    useEffect(() => {
        if (!cookieValue) {
            navigate('/');
        } else {
            navigate(`/Profile/${cookieValue}`);
        }
    }, [cookieValue, navigate]); //hadi katregera finma tbedlat la valeur dyal l cookie 

    useEffect(() => {
        //ghatmchi tjib lia data men had l backedn url apres atched data li
        // jabt o t7etha lia f User o ila kan chi error o majabt walo ra atgolha f console
        //hadchi kamel kitriggera fach la valeur dyal [id] katbedel 
        axios.get(`http://localhost:8080/Auth/show/${id}`)
            .then(response => { setUser(response.data); })
            .catch(error => {
                console.error('Error fetching User:', error);
            });
    }, [id]);

    //this function cancels a booking by sending a delete request with the provided
    //idB to the backend API
    //removing the booking with the specified idB from the myBookings list
    //and updating the state with the updated list.
    const handleCancelBooking = async (idB) => {
        try {
            await axios.delete(`http://localhost:8080/Reservations/Delete/${idB}`);
            const updatedBookings = myBookings.filter(booking => booking.idB !== idB);
            setMyBookings(updatedBookings);
            console.log("Reservation deleted:", idB);
        } catch (error) {
            console.error('Error deleting reservation:', error);
        }
    };



    const handleEditProfile = () => {
        setParameters(true);
    };
    const handleMyBookings = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.get(`http://localhost:8080/Reservations/ShowALL/${id}`, {
                idU: ''
            });
            setMyBookings(response.data); // Set myBookings a un tableau qui vient du backend
            console.log("chnu kayn fl my bookings" + myBookings);
            setParameters(false);


        } catch (error) {
            console.error('Error fetching bookings:', error);
        }
    };

    const handleMyHostings = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.get(`http://localhost:8080/Hostings/ShowALL/${id}`, {
                idU: ''
            });
            setMyHostings(response.data);
            setParameters(false);
        } catch (error) {
            console.error('Error fetching hostings:', error);
        }
    };
    //this fct takes the event coming from that button
    //
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.put(`http://localhost:8080/Auth/Update/${id}`, {idU: '',//these get filled from the form
                firstName,lastName,password,});
            setUser(response.data);
            setParameters(false);
          
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    };

    const handleCancel = () => {
        setParameters(false);
    };
    const handleHideB = () => {
        setMyBookings(false);
    };
    const handleHideH = () => {
        setMyHostings(false);
    };
    if (!user) {
        return null;
    }

    return (
        <section className="h-100 gradient-custom-2">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-lg-9 col-xl-7">
                        <div className="card">
                            <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#000', height: '200px' }}>
                                <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                                    <img
                                        src={`data:image/png;base64,${user.img}`}
                                        alt="Generic placeholder image"
                                        className="img-fluid img-thumbnail mt-4 mb-2"
                                        style={{ width: '150px', zIndex: '1' }}
                                    />
                                </div>
                                {user ? (
                                    <div className="ms-3" style={{ marginTop: '130px' }}>
                                        <h5>{user.firstName} {user.lastName}</h5>
                                        <p>New York</p>
                                    </div>
                                ) : null}
                            </div>
                            <div className="p-4  text-black" style={{ backgroundColor: '#f8f9fa' }}>
                                <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-dark" data-mdb-ripple-color="dark" style={{ zIndex: '1' }} onClick={handleEditProfile}>
                                    Edit profile
                                </button>
                                {parameters ? (
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-group mb-4">
                                            <label htmlFor="firstName">Change First Name</label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                className="form-control"
                                                required
                                                value={firstName}
                                                onChange={(e) => setFirstName(e.target.value)}
                                            />
                                        </div>
                                        <div className="form-group mb-4">
                                            <label htmlFor="lastName">Change Last Name</label>
                                            <input
                                                type="text"
                                                id="lastName"
                                                className="form-control"
                                                required
                                                value={lastName}
                                                onChange={(e) => setLastName(e.target.value)}
                                            />
                                        </div>
                                        <div className="form-group mb-4">
                                            <label htmlFor="password">Change Password</label>
                                            <input
                                                type="password"
                                                id="password"
                                                className="form-control"
                                                required
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <button
                                                type="submit"
                                                className="btn btn-primary me-2">
                                                Submit
                                            </button>
                                            <button
                                                type="button"
                                                className="btn btn-secondary"
                                                onClick={handleCancel}>
                                                Cancel
                                            </button>
                                        </div>
                                    </form>
                                ) : null}
                            </div>


                        </div>
                        <div className="p-4  text-black" style={{ backgroundColor: '#f8f9fa' }}>
                            <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-dark" data-mdb-ripple-color="dark" style={{ zIndex: '1' }} onClick={handleMyBookings}>
                                My Bookings
                            </button>

                            {myBookings ? (
                                <div>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Date Booked</th>
                                                <th>Start Date</th>
                                                <th>End Date</th>
                                                <th>Price</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {myBookings.map((booking) => (
                                                <tr key={booking.idB}>
                                                    <td>{booking.dateB}</td>
                                                    <td>{booking.dateStart}</td>
                                                    <td>{booking.dateEnd}</td>
                                                    <td>{booking.price}</td>
                                                    <td>{booking.bookingStatus}</td>
                                                    <td>
                                                        <button
                                                            type="button"
                                                            className="btn btn-danger"
                                                            onClick={() => handleCancelBooking(booking.idB)}>
                                                            Cancel
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>

                                    <div className="form-group">
                                        <button type="button" className="btn btn-secondary" onClick={handleHideB}>
                                            Hide
                                        </button>
                                    </div>
                                </div>
                            ) : null}

                        </div>
                        <div className="p-4  text-black" style={{ backgroundColor: '#f8f9fa' }}>
                            <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-dark" data-mdb-ripple-color="dark" style={{ zIndex: '1' }} onClick={handleMyHostings}>
                                My Hostings
                            </button>

                            {myHostings ? (
                                <div>
                                    {myHostings.map((hosting, index) => (
                                        <div key={index} className="card mb-3">
                                            <div className="row g-0">
                                                <div className="col-md-4">
                                                    <img src={`data:image/png;base64,${hosting.imgPathList[0]}`} className="img-fluid rounded-start" alt="Hosting" />
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body">
                                                        <h5 className="card-title">{hosting.name}</h5>
                                                        <p className="card-text">{hosting.descLocal}</p>
                                                        <p className="card-text"><strong>Address:</strong> {hosting.addresse}, {hosting.city}</p>
                                                        <p className="card-text"><strong>Type:</strong> {hosting.type}</p>
                                                        <p className="card-text"><strong>Price:</strong> {hosting.price} DH</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    <div className="form-group">
                                        <button type="button" className="btn btn-secondary" onClick={handleHideH}>
                                            Hide
                                        </button>
                                    </div>
                                </div>
                            ) : null}


                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MyProfile;
