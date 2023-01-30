import React from "react";
import Slider from "react-slick";
import slider from '../images/home-background.png'
import './home.css'
export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings} className='slidermain'>
      <div>
        <h3><img src={slider} alt="" className="sliderimage" /></h3>
      </div>
      <div>
      <img src={slider} alt="" className="sliderimage" />
      </div>
      <div>
      <img src={slider} alt="" className="sliderimage" />
      </div>
      <div>
      <img src={slider} alt="" className="sliderimage" />
      </div>
    
    </Slider>
  );
}