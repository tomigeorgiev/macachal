import React from 'react'

import Navbar from './Navbar'

import bubble from './images/bubble.png'
import cardsleft from './images/cards.new2.png'
import cardsright from './images/cards.new.png'
import cardsbox from './images/box2.png'
import stars from './images/stars & puffs.png'


const header = () => {
  return (
    <div className='mb-5'>
      <div className=''>
        <div className='cards'>
          <img src={cardsleft} className='cardsleft' />
          <img src={cardsright} className='cardsright' />
          <img src={cardsbox} className='cardsbox' />
          <img src={stars} className='starss' />
        </div>
        <Navbar />
        <div className='text-center upper'>
          <a href='/products' className=' button-pink-wh markf'>Купи сега</a>
        </div>
      </div>
    </div>
  )
}

export default header;