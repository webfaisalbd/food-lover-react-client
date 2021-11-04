import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';

const Booking = () => {
    const { serviceId } = useParams();
    const {user} = useAuth();


const [serviceDetails,setServiceDetails]=useState([])

useEffect(()=>{
    fetch(`https://ancient-island-16836.herokuapp.com/services/${serviceId}`)
    .then(res=>res.json())
    .then(data=>setServiceDetails(data))
    

},[serviceId])

const { register, handleSubmit,reset} = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('https://ancient-island-16836.herokuapp.com/users', data)
            .then(res => {
                // console.log(res);
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })

        }



    return (
        <div className="row">

        <div className="col-md-6">
        <div className="card">

<div className="card-header">
   <img src={serviceDetails?.img} alt="" />
</div>

<div className="card-body text-info">
    <h5 className="card-title">Product Name: {serviceDetails?.name} </h5>
    <p className="card-text"><span className="fw-bold">Price:</span> {serviceDetails?.price}tk</p>
    
    <p className="card-text"><span className="fw-bold">Description::</span> {serviceDetails?.description}</p>
    <button className="btn btn-regular bg-success">Confirm Order</button>

</div>

</div>
        </div>
{/* another 6 col div  */}
        <div className="col-md-6 add-service mt-4">
        <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 150 })} defaultValue={user.displayName} />
                <input {...register("email", { required: true, maxLength: 150 })} defaultValue={user.email} />
                <textarea {...register("address")} placeholder="address" />
                <input type="number" {...register("contactNumber")} placeholder="contact-number" />
                
                
                <input type="submit" />
            </form>
        </div>
            
        </div>
    );
};

export default Booking;