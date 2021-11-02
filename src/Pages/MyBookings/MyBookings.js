import React, { useEffect, useState } from 'react';
import { Card, Row } from 'react-bootstrap';

const MyBookings = () => {


    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data));
            
            
    }, [])

    const handleDelete= id => {
        const url=`http://localhost:5000/users/${id}`;
        fetch(url, {
            method:'DELETE'
        })
        .then(res=>{
            
                    alert('Deleted successfully');
                    
                
        })
        
    }

// my editing panel 
// 


    return (
        <div id="users">
            <h2 className="mt-5 text-info">Users information</h2>

            <div className="row">
              {
                users.map(user=>
                  <div className="col-md-4">
                    <div className="p-3 m-2 shadow-lg rounded border border-success" style={{ width: "21rem",backgroundColor:"lightcyan"}}>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                    <p>{user.address}</p>
                    <button className="btn btn-danger" onClick={()=> handleDelete(user._id)}>Delete</button>
                    </div>
                  </div>
                  )
              }
            </div>
      
  </div>
    );
};

export default MyBookings;