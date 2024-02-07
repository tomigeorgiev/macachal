import React from 'react'

import macalogo from './images/maca.new.png'
import box from './images/box2.png'

import Footer from './Footer'

const Products = () => {
    return (
        <div>
            <nav className="navbar navbar-dark ">
                <div className="container-fluid">
                    <a className="navbar-brand mx-2" href="/">
                        <img src={macalogo} height='70' />
                    </a>
                    <form className="d-flex mx-4 right">
                        <a className="navbar-brand mx-3 par-font-fam" href="/products">Продукти</a>
                        <a className="navbar-brand mx-5 par-font-fam" href="/about">За нас</a>
                    </form>
                </div>
            </nav><br/><br/><br/>
            <div class="container text-light my-5 py-5">
                <div class="row p-3">
                    <div class="col text-center">
                    <img src={box} height='450vh' />
                    </div>
                    <div class="col">
                        <h2>Maca Cards</h2>
                        <p>Et excepteur magna velit non. Quis enim dolor laborum eiusmod est incididunt laborum eu laboris velit ea aute veniam. Velit ad ipsum aliquip excepteur et. Occaecat in occaecat laboris elit magna eu.</p>
                        <ul>
                            <li>Aasd</li>
                            <li>Aasd</li>
                            <li>Aasd</li>
                            <li>Aasd</li>
                        </ul>
                        <p>Sunt incididunt ad veniam enim commodo reprehenderit consequat irure quis esse consequat quis deserunt id.</p>
                        <button className='btn btn-outline-light outline py-2 px-3'>Добави в количката</button>
                    </div>
                </div>
            </div>
            <footer className='bg-light mb-0'>
                <Footer />
            </footer>
        </div>
    )
}

export default Products