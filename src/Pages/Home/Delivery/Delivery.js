import React from 'react';
import { Card, Col } from 'react-bootstrap';


const Delivery = ({delivery}) => {

    const {name,img,salary,area} =delivery;

    return (
       
    <Col sm={12} md={6} lg={4}>
      
        <div className="m-2 mb-3">
            <Card className="mx-auto  shadow-lg" style={{ width: "21rem",backgroundColor:"lightcyan"}}>
                  <Card.Img variant="top" className="img-fluid p-2" src={img} />
                  <Card.Body className="my-1 py-1">
                        <Card.Title>{name}</Card.Title>
                  </Card.Body>
                  <Card.Body className="my-1 py-1">
                        <h4>Price: {salary}$</h4>
                   </Card.Body>
                   <p>{area}</p>

                  <button className="btn btn-primary">More Info</button>
                
           </Card>
           
      </div>
    
  </Col>
    
    );
};

export default Delivery;