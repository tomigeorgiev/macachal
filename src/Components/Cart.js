import React, { useState } from 'react'
import './cust.css'
import macalogo from './images/maca.new.png'
import box from './images/box2.png'

const Cart = () => {
    
    let price;
    const removeOfCart = () =>{
        localStorage.removeItem('addedToCart');
        window.location.reload();
    }
    const isItem = () =>{
        let item = localStorage.getItem('addedToCart');
        if(item){
            price = 49.9
            return(
                <>
                    <div className='col'>
                        <img src={box} height='300vh' />
                    </div>
                    <div className='col py-3 markf'>
                            <h1>Manicure Cards Challenge</h1><br /><br/>
                            <h3 className='fw-normal'><i>49,90лв</i></h3>
    
                            <select class="form-select w-25 m-2">
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                            </select>
                            <button className='btn btn-danger m-2' onClick={removeOfCart}> Премахни</button>
                    </div>
                    
                </>
            )
        }else{
            return(
                <h2 className='markf'>Количката е празна</h2>
            )
        }
    }

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
            </nav><br /><br /><br />
            <div class="container text-light my-5 py-5">
                <div class="row p-3">
                    <div class="col d-flex">
                        {isItem()}
                    </div>
                    <div class="col par-font-fam">
                        <h5 className='lett'><b>Междинна сума: {price} лв</b></h5>
                        <p className='text-secondary'>Доставката се начислява отделно. </p>
                        <hr/>
                        <div className='d-block '>
                            <h3><b>Общо:</b> {price + 5.95} лв</h3>
                        <button className='button-wh-pink float-right par-font-fam'>Поръчай</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart