import React from 'react'

import './cust.css'

import car1 from './images/1-01-01.png'
import car2 from './images/5-05.png'
import car3 from './images/6-06.png'


const Carousel = () => {
    return (
        <>
            <div className="slideshow-container">
            <img src={car1} />
                <div className="mySlides fade">
                    <div className="numbertext">1 / 3</div>
                    <img src={car1}  />
                    <div className="text">Caption Text</div>
                </div>

                <div className="mySlides fade">
                    <div className="numbertext">2 / 3</div>
                    <img src={car2} style={{width: "100%"}} />
                    <div className="text">Caption Two</div>
                </div>

                <div className="mySlides fade">
                    <div className="numbertext">3 / 3</div>
                    <img src={car3} style={{width: "100%"}}/>
                    <div className="text">Caption Three</div>
                </div>

                <a className="prev" onclick="plusSlides(-1)">&#10094;</a>
                <a className="next" onclick="plusSlides(1)">&#10095;</a>
            </div>
            <br />

            <div style={{textAlign: 'center'}}>
                <span className="dot" onclick="currentSlide(1)"></span>
                <span className="dot" onclick="currentSlide(2)"></span>
                <span className="dot" onclick="currentSlide(3)"></span>
            </div>

        </>
    )
}

export default Carousel