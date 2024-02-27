import React from 'react'
import { useState, useEffect, useRef } from 'react'

import Navbar from './Navbar'
import macalogo from './images/maca.new.png'

import bubble from './images/bubble.v03.png'
import cardsleft from './images/cards.new2.png'
import cardsright from './images/cards.new.png'
import cardsbox from './images/box2.png'

import puffs from './images/puffs.png'
import stars from './images/stars2.6.png'

import video from './images/anim.mp4'

import './header.css'

const Header = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;

        const handleVideoEnd = () => {
            video.pause();
            video.currentTime = video.duration - 0.01; // Замразяване на последния кадър
            captureLastFrame();
        };

        video.addEventListener('ended', handleVideoEnd);

        return () => {
            video.removeEventListener('ended', handleVideoEnd);
        };
    }, []);

    const captureLastFrame = () => {
        const canvas = document.createElement('canvas');
        const video = videoRef.current;

        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        const ctx = canvas.getContext('2d');
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

        const imageUrl = canvas.toDataURL(); // Последният кадър като base64 URL

        console.log(imageUrl); // Можете да използвате този URL или да го изпратите на сървъра за обработка или да го запазите локално
    };

    return (
        <div className='mb-5'>
            <div className=''>
                <div className='display'>
                    <img src={cardsleft} className='cardsleft' />
                    <img src={cardsright} className='cardsright' />
                    <img src={cardsbox} className='cardsbox' />
                    <img src={stars} className='starss' />
                    {/* <img src={puffs} className='puffs' /> */}
                </div>
                <div className='headerback'>
                    <div id='videoback'>
                        <video
                            className='video'
                            id='video'
                            ref={videoRef}
                            autoPlay
                            muted
                        >
                            <source src={video} type="video/mp4" />
                        </video>
                    </div>
                    <nav className="navbar navbar-dark ">
                        <div className="container-fluid">
                            <a className="navbar-brand mx-2" href="/">
                                <img src={macalogo} height='70' />
                            </a>
                            <form className="d-flex mx-4 right">
                                <div className='li'><a className="navbar-brand navbar-branda mx-3 markf" href="/products">Продукти</a></div>
                                <div className='li'><a className="navbar-brand navbar-branda mx-3 markf" href="/about">За нас</a></div>
                            </form>
                        </div>
                    </nav>
                </div>
                <div className='text-center upper'>
                    <a href='/products' className=' button-pink-wh px-5 py-3 h4 markf'>Купи сега</a>
                </div>
            </div>
        </div>
    )
}

export default Header;