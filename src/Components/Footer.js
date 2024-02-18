import React from 'react'

import logo from './images/logo.png'

import privacy from './privacy'

const Footer = () => {
    return (
        <div className="container">
            <footer className="row px-3 py-5 border-top ">
                <div className="col-sm-4 mb-3 mr-5 ">
                    <img src={logo} height={200} />
                </div>

                <div className="col-sm-4 mb-3 markf text-center font-large">
                    <div>
                        <h4 className='markf'>Полезно</h4>
                        <ul className="nav flex-column ">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 markf text-white"></a></li>
                            <li className="nav-item mb-2"><a href="/products" className="nav-link p-0 markf text-muted">Продукти</a></li>
                            <li className="nav-item mb-2"><a href="/about" className="nav-link p-0 markf text-muted">За нас</a></li>
                            {/* <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Партньори</a></li> */}
                            <li className="nav-item mb-2"><a href="/about" className="nav-link p-0 markf text-muted">Контакти</a></li>
                            <li className="nav-item mb-2"><a href="/#faq" className="nav-link p-0 markf text-muted">FAQ</a></li>
                        </ul>
                    </div>
                </div>

                <div className="col-sm-4 mb-5 font-large text-center">
                    <h4 className='markf'>Намерете ни</h4><br />
                    <ul className="nav flex-column text-center">
                        <li className="nav-item mb-2 markf ">
                            <a href="#" className="btn btn-dark pt-2 pickbtn par-font-fam "><i class="fa-brands fa-tiktok"></i></a>
                            <a href="#" className="btn btn-dark pt-2 pickbtn par-font-fam"><i class="fa-brands fa-facebook-f"></i></a>
                            <a href="#" className="btn btn-dark pt-2 pickbtn par-font-fam"><i class="fa-brands fa-instagram"></i></a>
                        </li>
                        <li className="nav-item markf font-lm mb-2 pink stroke">@macachallenge</li>

                        <li className="nav-item font-sm"><a href='/privacy' className="nav-link p-0 text-muted">Политика за поверителност</a></li>

                    </ul>
                </div>
            </footer>
            <hr className='m-0' />
            <div className='text-center text-secondary treb p-4'>
                Manicure Cards Challenge 2024 | &copy; All Rights Reserved
            </div>

        </div>
    )
}

export default Footer