import React from 'react'
import { useEffect, useState } from 'react'

const [users, setUsers] = useState([]);

const getUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json()
    setUsers(data);
    console.log(data);
}

useEffect(() => {
    getUsers();
}, [])

const htmlUsers = Array.isArray(users) 
? users.map(user => (
    <div key={user.id}>
        <h3>{user.name}</h3>
    </div>
    )) 
    : null;

    return(
        <div>
            <h1> Fetch API</h1>
            <h3> {htmlUsers}</h3>
        </div>
    )


export default extra