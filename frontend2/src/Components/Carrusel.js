import React from "react";
import {Carousel} from "react-bootstrap"

const Carrusel = () =>{
return (
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://http2.mlstatic.com/optimize/o:f_webp/resources/deals/exhibitors_resources/mla-home-desktop-slider-picture-ba87a94d-25b3-43a0-974d-260b174792f3.jpg"
      alt="First slide"
    />
  {/*   <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://http2.mlstatic.com/optimize/o:f_webp/resources/deals/exhibitors_resources/mla-home-desktop-slider-picture-98611f6c-f603-4788-85c1-fce1c63b59c9.jpg"
      alt="Second slide"
    />

   {/* <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption> */} 
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://http2.mlstatic.com/optimize/o:f_webp/resources/deals/exhibitors_resources/mla-home-desktop-slider-picture-9649a9dc-56c6-4335-a6fa-96637afbfa3c.jpg"
      alt="Third slide"
    />

   {/*  <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>*/}
  </Carousel.Item>


</Carousel>
)
}

export default Carrusel;