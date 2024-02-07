import React from 'react'

import logo from './images/logo.png'

const Footer = () => {
    return (
        <div className="container">
            <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-4 py-5 border-top">
                <div className="col mb-3">
                    <img src={logo} height={200} />
                </div>

                <div className="col mb-3">

                </div>
                {/* 
                <div className="col mb-3">
                    <h5>Section</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
                    </ul>
                </div> */}

                <div className="col mb-3">
                    <h5>Полезно</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Продукти</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">За нас</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Партньори</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Контакти</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQ</a></li>
                    </ul>
                </div>

                <div className="col mb-3">
                    <h5>Намерете ни</h5><br/>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2 d-flex">
                            <a href="#" className="btn btn-dark pickbtn "><i class="fa-brands fa-tiktok"></i></a>
                            <a href="#" className="btn btn-dark pickbtn "><i class="fa-brands fa-facebook-f"></i></a>
                            <a href="#" className="btn btn-dark pickbtn "><i class="fa-brands fa-instagram"></i></a>
                        </li>
                        <li className="nav-item mb-2">@macachallenge</li>
                        
                        <li className="nav-item "><a href="#" className="nav-link p-0 text-muted">Общи условия</a></li>
                        <li className="nav-item "><a href="#" className="nav-link p-0 text-muted">Политика за поверителност</a></li>

                    </ul>
                </div>
            </footer><hr className='m-0' />
            <div className='text-center text-secondary p-4'>
                Manicure Cards Challenge 2024 | &copy; All Rights Reserved
            </div>

        </div>
    )
}

export default Footer