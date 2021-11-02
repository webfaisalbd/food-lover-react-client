import React, { useEffect, useState } from 'react';
const ManageAllOrders = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch(`https://ancient-island-16836.herokuapp.com/users`)
            .then(res => res.json())
            .then(data => {
                const value= data.filter(db=>db.email==='web.faisal.bd@gmail.com')
                setUsers(value);
            });       
    }, [])

    const handleDelete= id => {
        const url=`https://ancient-island-16836.herokuapp.com/users/${id}`;
        fetch(url, {
            method:'DELETE'
        })
        .then(res=>{
            
                    alert('Deleted successfully');
                    
                
        })
        
    }
    // -----------------
    // -----------------
    // -----------------
    // -----------------
    // -----------------
    // -----------------
    // -----------------
    // -----------------
    return (
        <div id="users">
            <h2 className="mt-5 text-info">My orders</h2>
            <div className="row">
       {
           users.map(user=> <div className="col-md-4">
           <div className="p-3 m-2 shadow-lg rounded border border-success" style={{ width: "21rem",backgroundColor:"lightcyan"}}>
           <p>{user.name}</p>
           <p>{user.email}</p>
           <p>{user.address}</p>
           <button className="btn btn-danger" onClick={()=> handleDelete(user._id)}>Delete</button>
           </div>
         </div> )
       }
              
            </div>
  </div>
    );
};
export default ManageAllOrders;