import React, { useEffect, useState } from 'react';
import { Card, Row } from 'react-bootstrap';

const MyBookings = () => {


    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch(`https://ancient-island-16836.herokuapp.com/users`)
            .then(res => res.json())
            .then(data => setUsers(data));
            
            
    }, [])



    return (
        <div id="users">
            <h2 className="mt-5 text-info">Manage All Orders</h2>

            <div className="row">
              {
                users.map(user=>
                  <div className="col-md-4">
                    <div className="p-3 m-2 shadow-lg rounded border border-success" style={{ width: "21rem",backgroundColor:"lightcyan"}}>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                    <p>{user.address}</p>
                    <button className="btn btn-danger" >Delete</button>
                    </div>
                  </div>
                  )
              }
            </div>
      
  </div>
    );
};

export default MyBookings;