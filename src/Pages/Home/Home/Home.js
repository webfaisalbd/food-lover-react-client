import React from 'react';
import Services from '../Services/Services';
import Deliveries from '../Deliveries/Deliveries';
import Banner from '../Banner/Banner';
import Covid from '../Covid/Covid';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <Covid></Covid>
            <Deliveries></Deliveries>
        </div>
    );
};

export default Home;