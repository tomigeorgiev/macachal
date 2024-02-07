import React from 'react'
import Slider from "react-slick"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './cust.css'

import car1 from './images/1-01-01.png'
import car2 from './images/5-05.png'
import car3 from './images/6-06.png'


const Carousel = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        centerMode: true,
        easing: 'ease-in-out',
        lazyLoad: true
      };
      return (
        <Slider {...settings}>
          <div>
          <img src={car1} />
          </div>
          <div>
          <img src={car2} />
          </div>
          <div>
          <img src={car3} />
          </div>
          
        </Slider>
      );
}

export default Carousel