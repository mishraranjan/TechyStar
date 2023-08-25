import React from "react";
import img from "../assets/3.jpg";
import img2 from "../assets/4.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Service = () => {
  return (
    <div >
      <Carousel infiniteLoop autoPlay showStatus={false} showArrows={false} showThumbs={false} interval={2000}>
        <div>
          <img src={img} alt="Item1" />
          <p className="legend">Full Stack</p>
        </div>
        <div>
          <img src={img2} alt="Item2" />
          <p className="legend">Peer To Peer Support</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Service;
