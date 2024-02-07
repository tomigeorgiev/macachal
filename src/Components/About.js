import React from 'react'
import macalogo from './images/maca.new.png'


const About = () => {
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
            </nav><br /><br /><br /><br />
            <div className='container text-light text-center px-5'>
                <h2>Manicure Cards Challenge</h2>
                <hr/>
                <p>Labore proident dolor velit ullamco adipisicing. Quis sit deserunt nulla incididunt nisi est proident nisi. Ex amet amet quis nulla magna eu id. Quis laborum elit pariatur non pariatur velit ut occaecat sunt commodo et aliquip esse quis. Minim esse dolor sint sit nostrud consectetur. Qui sint eiusmod reprehenderit aliquip est eu.</p>
                <br/>
                <h3>Контакти</h3>
                <ul>
                    <li>0877777888</li>
                    <li>0877777888</li>
                    <li>maca@maca.bg</li>
                </ul>
            </div>
        </div>
    )
}

export default About