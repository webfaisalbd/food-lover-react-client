import React from 'react';
import { Badge, Button, Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';


const Header = () => {

    const {user,logOut} =useAuth();

    return (
        <>
            <Navbar bg="info" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="#home">Food-Lover</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/services">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/covid">Premium Membership</Nav.Link>
                        <Nav.Link as={HashLink} to="/deliveries">Delivery Boys</Nav.Link>
                        
                        
                        {
                            user?.email ?  <>
                            
                            <Nav.Link as={HashLink} to="/MyBookings">MyBookings</Nav.Link>

                            <Nav.Link as={HashLink} to="/addNewService">addNewService</Nav.Link>
                            <Button className="ms-3 bg-danger" onClick={logOut} variant="light">Log Out</Button></> 
                              : <Nav.Link as={HashLink} to="/login">Login</Nav.Link>
                        }

<Nav.Link>
        <Badge bg="success" text="info">
        {user?.displayName || 'No User Found'}
        </Badge>
        </Nav.Link>

                        <img style={{height:'50px',width:'50px',borderRadius:'50px'}} src={user.photoURL || 'https://i.ibb.co/M5dq9cM/3images.png'} alt="" />

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;