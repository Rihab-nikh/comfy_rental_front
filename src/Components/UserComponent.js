import React, { useEffect, useState } from 'react';
import axios from 'axios';
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
            <h1>Users</h1>
            <ul>
                {users.map(user => (
                    <li key={user.idU}>
                        <p>{user.idU}</p>
                        <Link to={`/User/${user.idU}`}>{user.firstName}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UserComponent;
