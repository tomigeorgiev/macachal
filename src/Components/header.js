import React from 'react'

import Navbar from './Navbar'
import macalogo from './images/maca.new.png'

import bubble from './images/bubble.png'
import cardsleft from './images/cards.new2.png'
import cardsright from './images/cards.new.png'
import cardsbox from './images/box2.png'
import stars from './images/stars & puffs.png'

import './header.css'

const header = () => {
  return (
    <div className='mb-5'>
      <div className=''>
        <div className=''>
          <img src={cardsleft} className='cardsleft' />
          <img src={cardsright} className='cardsright' />
          <img src={cardsbox} className='cardsbox' />
          <img src={stars} className='starss' />
        </div>
        <div className='headerback'>
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

export default header;