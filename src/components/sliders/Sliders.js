import React from "react";
import Carousel from "react-bootstrap/Carousel";
const Sliders = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="https://http2.mlstatic.com/D_NQ_697777-MLA48938938725_012022-OO.webp"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://http2.mlstatic.com/D_NQ_820994-MLA48892796637_012022-OO.webp"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://http2.mlstatic.com/D_NQ_835238-MLA48886206292_012022-OO.webp"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://http2.mlstatic.com/D_NQ_820486-MLA48918398040_012022-OO.webp"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Sliders;
