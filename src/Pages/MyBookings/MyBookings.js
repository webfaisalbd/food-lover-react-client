import React, { useEffect, useState } from 'react';
import { Button, Card, Row, Table } from 'react-bootstrap';

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
              

<Table striped bordered hover variant="secondary">
<thead>
  <tr>
    
    <th>Name</th>
    <th>Email</th>
    <th>Address</th>
    <th>Status</th>
    <th>Action</th>
  </tr>
</thead>
<tbody>
 {
   users.map(user => 
    <tr>
    
    <td>{user.name}</td>
    <td>{user.email}</td>
    <td>{user.address}</td>
    <td>Pending</td>
    <td> <Button className="btn btn-primary">✔</Button> <Button className="btn btn-primary">❌</Button> </td>
  </tr>
   )
 }
  
  
</tbody>
</Table>
                
            </div>
      
  </div>
    );
};

export default MyBookings;