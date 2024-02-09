import React from 'react'

import logo from './images/logo.png'

const Footer = () => {
    return (
        <div className="container">
            <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-3 py-5 border-top d-flex">
                <div className="col mb-3 mr-5 ">
                    <img src={logo} height={200} />
                </div>

                <div className="col mb-3 par-font-fam widthsm  font-large">
                    <div>
                    <h4>Полезно</h4>
                    <ul className="nav flex-column ">
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Продукти</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">За нас</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Партньори</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Контакти</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQ</a></li>
                    </ul>
                    </div>
                </div>

                <div className="col mb-5 font-large">
                    <h4 className='par-font-fam'>Намерете ни</h4><br/>
                    <ul className="nav flex-column ">
                        <li className="nav-item mb-2 d-flex">
                            <a href="#" className="btn btn-dark pickbtn par-font-fam "><i class="fa-brands fa-tiktok"></i></a>
                            <a href="#" className="btn btn-dark pickbtn par-font-fam"><i class="fa-brands fa-facebook-f"></i></a>
                            <a href="#" className="btn btn-dark pickbtn par-font-fam"><i class="fa-brands fa-instagram"></i></a>
                        </li>
                        <li className="nav-item markf font-lm mb-2">@macachallenge</li>
                        
                        <li className="nav-item font-sm"><a href="#" className="nav-link p-0 text-muted">Общи условия</a></li>
                        <li className="nav-item font-sm"><a href="#" className="nav-link p-0 text-muted">Политика за поверителност</a></li>

                    </ul>
                </div>
            </footer><hr className='m-0' />
            <div className='text-center text-secondary treb p-4'>
                Manicure Cards Challenge 2024 | &copy; All Rights Reserved
            </div>

        </div>
    )
}

export default Footer