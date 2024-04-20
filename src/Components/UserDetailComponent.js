import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; 

const UserDetailComponent = () => {
    const [user, setUser] = useState(null); 
    const { id } = useParams(); 

    useEffect(() => {
        axios.get(`http://localhost:8080/Auth/show/${id}`)
            .then(response => {
                setUser(response.data);
            })
            .catch(error => {
                console.error('Error fetching User:', error);
            });
    }, [id]); 

    return (
        <div>
            <h1>User Details</h1>
            {user && (
                <div>
                    <h2>{user.idU}</h2>
                    <p>{user.email}</p>
                    <p>{user.firstName}</p>
                    <p>{user.lastName}</p>
                    <p>{user.imgPath}</p>
                    <p>{user.password}</p>
                </div>
            )}
        </div>
    );
}

export default UserDetailComponent;
