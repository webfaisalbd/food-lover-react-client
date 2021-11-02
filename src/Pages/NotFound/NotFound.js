import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
        <img className="m-2" style={{ width: '50%' }} src="https://trustedrevie.ws/assets/screen_shots//404.jpg" alt="" />
        <br />
            <Link to="/home"><button className="btn btn-regular bg-success">Go Home</button>
            </Link>
        </div>
    );
};

export default NotFound;