import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
const ManageAllOrders = () => {
    const [users, setUsers] = useState([])
    const {user} = useAuth();
    useEffect(() => {
        fetch(`https://ancient-island-16836.herokuapp.com/users`)
            .then(res => res.json())
            .then(data => {
                const value= data.filter(db=>db.email===user.email)
                setUsers(value);
            });       
    }, [])




    
    const handleDelete= id => {

        const proceed = window.confirm('Are you sure,You want to delete?')
        if (proceed) {
            const url = `https://ancient-island-16836.herokuapp.com/users/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')
                        const remainingUsers = users.filter(user => user._id !== id);
                        setUsers(remainingUsers)

                    }
                })
        }


        
    }
    
    
    return (
        <div id="users">
            <h2 className="mt-5 text-info">My orders</h2>
            <div className="row">
       {
           users.map(user=> <div className="col-md-4">
           <div className="p-3 m-2 shadow-lg rounded border border-success" style={{ width: "21rem",backgroundColor:"lightcyan"}}>
           <p>Name:{user.name}</p>
           <p>Email:{user.email}</p>
           <p>Address:{user.address}</p>
           <p>Date:{user.date}</p>
           <button className="btn btn-danger" onClick={()=> handleDelete(user._id)}>Delete</button>
           <button className="btn btn-danger me-2" >{user.status}</button>
           </div>
         </div> )
       }
              
            </div>
  </div>
    );
};
export default ManageAllOrders;


