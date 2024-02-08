import React, { useState } from 'react'
import './cust.css'
import macalogo from './images/maca.new.png'
import box from './images/box2.png'

const Cart = () => {
    
    let price;
    let devprice = 5.95;
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
                    <div className='col-sm-4'>
                        <img src={box} height='300vh' />
                    </div>
                    <div className='col py-3 markf'>
                            <h1>Manicure Cards Challenge</h1><br /><br/>
                            <h3 className='fw-normal'><i>49.90лв</i></h3>
    
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
                    <div class="col-md-4 par-font-fam">
                        <div className='row'>
                            <div className='col-sm-9 float-left'>
                                <h5 className='lett'><b>Междинна сума: </b></h5>
                            </div>
                            <div className='col-3 font-large ltr-space d-flex justify-content-end text-right'>
                                <h4 className='pl-3'>{price} лв</h4>
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
                        <hr/>
                        <div className='d-block '>
                            <div className='row'>
                            <div className='col-8'>
                            <h3><b>Общо:</b></h3>
                            </div>
                            <div className='col-4 d-flex justify-content-end'>
                                <h3>{price + devprice}  лв.</h3>
                            </div>
                            </div>
                             
                            <button className='button-wh-pink float-right par-font-fam'>Поръчай</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart