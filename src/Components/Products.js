import React from 'react'

import macalogo from './images/maca.new.png'
import box from './images/box2.png'

import Footer from './Footer'
import CartComponent from './CartComponent'

const Products = () => {
    let cartItem = document.getElementById('basket')
    const addToCart = () => {
        localStorage.setItem('addedToCart', "added");
        const basket = document.getElementById('basket');
        const pinkDot = document.createElement('p');
        pinkDot.classList.add('num');
        basket.appendChild(pinkDot);
        basket.classList.add('scaled');
        setTimeout(() => {
            basket.classList.remove('scaled');
             // Remove the dot after the scaling effect is done
        }, 300);
    };


    return (
        <div>
            <nav className="navbar navbar-dark border-bottom">
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
            <br /><br /><br />
            <div class="container text-light my-5 py-5">
                <div class="row p-3">
                    <div class="col text-center">
                        <img src={box} height='450vh' />
                    </div>
                    <div class="col">
                        <h2 className='markf '>Maca Cards</h2><hr />
                        <p className='par-font-fam h5 mb-4 lhgh'>
                            Manicure Cards Challenge е игра за тези, които никога не знаят какво искат.
                            Майсторът подава картите с гръб към клиента, той тегли и бум! Имате си нов маникюр.. почти. По този повод сме измъдрили:
                        </p>
                        <ul className='par-font-fam liststyle h5 mb-3'>
                            <li className='liststyle'>27 ръчно рисувани карти</li>
                            <li>6 рунда</li>
                            <li>183721 комбинации</li>
                        </ul>
                        <p className='par-font-fam h5'>И даже са изцяло на български!</p>
                        <hr />
                        <button onClick={addToCart} className='button-wh-pink'>Добави в количката</button>
                    </div>
                </div>
            </div>
            <footer className='bg-light mb-0'>
                <Footer />
            </footer>
            <CartComponent />
        </div>
    )
}

export default Products