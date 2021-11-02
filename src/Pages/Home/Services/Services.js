import React, { useEffect, useState } from 'react';
import {  Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {

    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://ancient-island-16836.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
            // .then(data => setServices(data.slice(0,6)));
    }, [])

    return (
        <div id="services">
            <h2 className="mt-5 text-info">Our Top Services/Products</h2>

            <Row>
            {
                services.map(service=> <Service 
                    key={service.id}
                    service={service}
                ></Service>)
            }
        </Row>
      
  </div>

    );
};

export default Services;