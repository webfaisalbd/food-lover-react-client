import React from 'react';
import { Nav } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import './Footer.css';




const Footer = () => {
    return (
        <div>
            <div className="footer-container bg-info">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="left-container">
                                <h3 className="p-2">Food-Lover</h3>
                                <p className="p-2">Stay Home, Stay safe</p>
                                <p className="p-2">Eat humbly</p>
                                
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="footer-menu-container">
                                <ul>
                                    <li className="footer-menu"><Nav.Link as={HashLink} to="/home#home">Home</Nav.Link></li>
                                    <li className="footer-menu"><Nav.Link as={HashLink} to="/services">Services</Nav.Link></li>
                                    <li className="footer-menu"><Nav.Link as={HashLink} to="/deliveries">Delivery Boys</Nav.Link></li>
                                    <li className="footer-menu"><Nav.Link as={HashLink} to="">About Us</Nav.Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="right-footer-container">
                                <div className="text-center">
                                    <h3 className="">Sign up for the new Buyer</h3>
                                    <input
                                        className="footer-input"
                                        type="text"
                                        placeholder="Enter Email"
                                    />
                                </div>
                                <div className="phone d-flex align-items-center justify-content-center mt-2">
                                    <div className="foter-phone-icon">
                                        
                                    </div>
                                    <div>
                                        <h5 className="ps-2">+88 01685477114</h5>
                                    </div>
                                </div>
                                <div className="map d-flex align-items-center justify-content-center">
                                    <div className="foter-phone-icon">
                                        
                                    </div>
                                    <div>
                                        <p className="ps-2">
                                            <br />  Savar,Dhaka,Bangladesh
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;