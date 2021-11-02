import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({service}) => {

    const {_id,name,img,element,price} =service;

    return (
        <Col sm={12} md={6} lg={4}>
      
        <div className="m-2 mb-3">
          <Card className="mx-auto pb-2" style={{ width: "21rem",backgroundColor:"lightcyan" }}>
            <Card.Img variant="top" className="img-fluid p-2" src={img} />
            <Card.Body className="my-1 py-1">
              <Card.Title>{name}</Card.Title>
            </Card.Body>
            <Card.Body className="my-1 py-1">
              <h4>Price: {price}$</h4>
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