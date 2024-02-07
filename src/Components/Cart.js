import React from 'react'
import './cust.css'
import macalogo from './images/maca.new.png'
import box from './images/box2.png'

const Cart = () => {
    let price;

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
                        <div className='col'>
                            <img src={box} height='300vh' />
                        </div>
                        <div className='col py-3'>
                            <h2>Manicure Cards Challenge</h2><br /><br/>
                            <h3 className='fw-normal'><i>49,90лв</i></h3>

                            <select class="form-select w-25">
                                <option value='49,90'>1</option>
                                <option value='99,80'>2</option>
                                <option value='149.70'>3</option>
                                <option value='199.60'>4</option>
                                <option value='249.50'>5</option>
                            </select>
                        </div>
                    </div>
                    <div class="col">
                        <h2>Междинна сума:</h2>
                        {price}
                        <button className='btn btn-outline-light outline py-2 px-3'>Поръчай</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart