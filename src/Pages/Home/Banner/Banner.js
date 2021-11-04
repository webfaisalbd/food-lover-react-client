import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from "../../../Images/banner1.jpg"
import banner2 from "../../../Images/banner2.jpg"
import banner3 from "../../../Images/banner3.jpg"


const Banner = () => {
    return (
        <>
            <Carousel>
  <Carousel.Item>
    <img  style={{height:"500px"}}
      className="d-block w-100"
      src={banner1}
      alt="First slide"
    />
    <Carousel.Caption>
      
      <h3>Fastest Delivery Services</h3> 
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img  style={{height:"500px"}}
      className="d-block w-100"
      src={banner2}
      alt="Second slide"
    />

    <Carousel.Caption>
      
    <h3>Delivery Cost depends on Area but avg 30/-</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img  style={{height:"500px"}}
      className="d-block w-100"
      src={banner3}
      alt="Third slide"
    />

    <Carousel.Caption>
    <h3>24/7 hour services</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </>
    );
};

export default Banner;