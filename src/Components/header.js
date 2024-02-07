import React from 'react'

import macalogo from './images/maca.new.png'
import bubble from './images/bubble.png'
import cardsleft from './images/cards.new2.png'
import cardsright from './images/cards.new.png'
import cardsbox from './images/box2.png'
import stars from './images/stars & puffs.png'


const header = () => {
  return (
    <div className='mb-5'>
      <div>
        <div className='cards'>
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
                <a className="navbar-brand mx-3 markf" href="/products">Продукти</a>
                <a className="navbar-brand mx-3 markf" href="/about">За нас</a>
              </form>
            </div>
          </nav>
        </div>
        <div className='text-center upper'>
          <button className=' buttonBuy'>Купи сега</button>
        </div>
      </div>
    </div>
  )
}

export default header;