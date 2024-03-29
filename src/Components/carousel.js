import React from 'react'
import Slider from "react-slick"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './cust.css'
import './carousel.css'

import car1 from './images/1-01-01.png'
import car2 from './images/5-05.png'
import car3 from './images/6-06.png'
import car4 from './images/2-02.png'
import car5 from './images/3-03.png'
import car6 from './images/4-04.png'


const Carousel = () => {
  var settings = {
    className: "center",
    centerMode: true,
    centerPadding: "280px",
    pauseOnHover: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    easing: 'ease-in-out',
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          centerPadding: "250px",
        }
      },
      {
        breakpoint: 1000,
        settings: {
          centerPadding: "150px",
        }
      },
      {
        breakpoint: 900,
        settings: {
          centerPadding: "50px",
        }
      },
      {
        breakpoint: 600,
        settings: {
          centerPadding: "20px",
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: "40px",
        }
      }
    ],
  };
  return (
    <div className='slider-container'>
      <Slider  {...settings}>
        <div className='d-flex justify-content-center'>
          <img className='carimg' src={car1} />
        </div>
        <div className='d-flex justify-content-center'>
          <img className='carimg' src={car2} />
        </div>
        <div className='d-flex justify-content-center'>
          <img className='carimg' src={car3} />
        </div>
        <div className='d-flex justify-content-center'>
          <img className='carimg' src={car4} />
        </div>
        <div className='d-flex justify-content-center'>
          <img className='carimg' src={car5} />
        </div>
        <div className='d-flex justify-content-center'>
          <img className='carimg' src={car6} />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel