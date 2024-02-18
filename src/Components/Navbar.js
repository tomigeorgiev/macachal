import React from "react";
import macalogo from './images/maca.new.png'

const Navbar = () =>{
    return(
        <>
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
        </>
    )
}

export default Navbar