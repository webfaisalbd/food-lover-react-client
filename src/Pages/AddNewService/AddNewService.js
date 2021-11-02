import React from 'react';
import "./AddNewService.css";
import axios from 'axios';
import { useForm } from "react-hook-form";

const AddNewService = () => {

    const { register, handleSubmit,reset} = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('https://ancient-island-16836.herokuapp.com/services', data)
            .then(res => {
                // console.log(res);
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })

        }


    return (
        <div className="add-service">
            <h2>Please Add a Service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 150 })} placeholder="Name" />
                <textarea {...register("description")} placeholder="Description" />
                <input type="number" {...register("price")} placeholder="price" />
                <input {...register("img")} placeholder="image url" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddNewService;