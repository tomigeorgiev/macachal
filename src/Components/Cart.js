import React, { useState, useEffect } from 'react'
import './cust.css'
import macalogo from './images/maca.new.png'
import box from './images/box2.png'

const Cart = () => {
    const [count, setCount] = useState(1);
    const devprice = 5.95;
    let itemPrice  = 49.9;

    const add = () => {
        setCount(count + 1);
    };

    const remove = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const removeOfCart = () => {
        localStorage.removeItem('addedToCart');
        window.location.reload();
    };

    let totalPrice = itemPrice * count + devprice;
    let totalPriceFormatted = totalPrice.toFixed(2);
    let intPrice = itemPrice * count

    const isItem = () => {
        let item = localStorage.getItem('addedToCart');
        
        if (item) {
            
            return (
                <>
                    <div className='col-sm-4'>
                        <img src={box} height='300vh' alt="Product" />
                    </div>
                    <div className='col py-3 markf'>
                        <h1>Manicure Cards Challenge</h1>
                        <p className='text-secondary'>#MaCaChallenge</p>
                        <br />
                        <h3 className='fw-normal'><i>49.90лв / на брой</i></h3>
                        <div className='d-flex'>
                            <button className='btn text-light par-font-fam rl border' onClick={add}>+</button>
                            <input className='inpplc text-white border form-control rounded-0  bg-transparent'  value={count} disabled></input>
                            <button className='btn text-light par-font-fam rr border' onClick={remove}>-</button>
                            <button className='btn btn-danger mx-3' onClick={removeOfCart}> Премахни</button>
                        </div>
                    </div>
                </>
            );
        } else {
            itemPrice = 0;
            return (
                <h2 className='markf'>Количката е празна</h2>
            );
        }
    };

    return (
        <div>
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
            </nav><br /><br /><br />

            {/* --------------------- Сума и бутон ------------------ */}

            <div class="container text-light my-5 py-5">
                <div class="row p-3">
                    <div class="col-md-8 d-flex">
                        {isItem()}
                    </div>
                    <div class="col-md-4 mt-3 par-font-fam">
                        <div className='row'>
                            <div className='col-sm-8 float-left'>
                                <h5 className='lett'><b>Междинна сума: </b></h5>
                            </div>
                            <div className='col-4 font-large ltr-space d-flex justify-content-end text-right'>
                                <h4 className='pl-3'>{intPrice.toFixed(2)} лв</h4>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-sm-9 float-left'>
                                <p className='text-secondary font-large '>Доставка: </p>
                            </div>
                            <div className='col-3 font-large ltr-space d-flex justify-content-end text-right'>
                                <p>{devprice} лв</p>
                            </div>
                        </div>
                        <hr />
                        <div className='d-block '>
                            <div className='row'>
                                <div className='col-7'>
                                    <h3><b>Общо:</b></h3>
                                </div>
                                <div className='col-5 d-flex justify-content-end'>
                                    <h3>{itemPrice > 0 && totalPriceFormatted || 0}  лв.</h3>
                                </div>
                            </div>

                            <button className='button-wh-pink float-right par-font-fam'>Поръчай</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center darks treb p-2'>
                <hr />
                Manicure Cards Challenge 2024 | &copy; All Rights Reserved
                <hr />
            </div>
        </div>
    )
}

export default Cart