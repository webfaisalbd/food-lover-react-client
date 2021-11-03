import React, { useEffect, useState } from 'react';
import Services from '../Services/Services';
import Deliveries from '../Deliveries/Deliveries';
import Banner from '../Banner/Banner';
import Covid from '../Covid/Covid';
import { Spinner } from 'react-bootstrap';

const Home = () => {

    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://ancient-island-16836.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
            // .then(data => setServices(data.slice(0,6)));
    }, [])

    return (
        <div id="home">
            {
                services.length ?  <div>
                    <Banner></Banner>
                <Services></Services>
                <Covid></Covid>
                <Deliveries></Deliveries>
                </div> : <Spinner animation="border" role="status">
  <span className="visually-hidden">Loading...</span>
</Spinner>
            }
        </div>
    );
};

export default Home;