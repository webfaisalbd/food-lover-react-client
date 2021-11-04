import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({service}) => {

    const {_id,name,img,element,price,deliveryCharge} =service;

    return (
        <Col sm={12} md={6} lg={4}>
      
        <div className="m-2 mb-3">
          <Card className="mx-auto pb-2" style={{ width: "21rem",backgroundColor:"lightcyan" }}>
            <Card.Img variant="top" className="img-fluid p-2" src={img} />
            <Card.Body className="my-1 py-1">
              <Card.Title> <h4>{name}</h4> </Card.Title>
            </Card.Body>
            <Card.Body className="my-1 py-1">
              <h6>Product Price: {price}$</h6>
            </Card.Body>
            <Card.Body className="my-1 py-1">
              <p>Delivery Charge: {deliveryCharge}$</p>
            </Card.Body>
            <p>{element}</p>
            <Link to={`/booking/${_id}`}>
                <button className="btn btn-info">Buy Now</button>
            </Link>
        
          </Card>
        </div>
      
    </Col>
    );
};

export default Service;