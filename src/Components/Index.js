import React from 'react'

import Carousel from './carousel'
import Header from './header'
import Footer from './Footer'
import './style.css'
import './cust.css'
import './animations.css'
import './startup-modern'
import './addscript'

const Index = () => {
    return (
        <div>
            <header className='headerclass'>
                <Header />
                <Carousel />
            </header>
            <br /><br /><br /><br /><br /><br /><br />
            <div className='my-5 p-5 text-center text-white'>
                <h2>Lorem Ipsum dolor sit amet</h2>
                <hr />
                <p className='px-5 mx-5'>
                    Enim laborum non culpa sint quis elit deserunt tempor ipsum ullamco. Aliquip ut laboris est velit ex reprehenderit veniam aliqua anim fugiat. Labore qui voluptate eiusmod cillum ullamco exercitation excepteur laboris velit minim est cupidatat do. Enim ad aliquip est ea ipsum quis cillum exercitation quis nostrud laboris.
                </p>
                <a href='/' className='btn btn-outline-light px-4 py-2' >Поръчай</a>
            </div>

            <div className='opt-in-bal' >
                <h3>Заглавие</h3>
                <div className='d-flex text-center'>
                <input type="email" class="form-control mb-2" id="email" placeholder="Имейл" />
                <button type="submit" class="btn btn-secondary mb-2 mx-2">Добави</button>
                </div>
            </div>

            <section className="py-5 my-5">
                <div className="container py-5">
                    <div className="row mb-2">
                        <div className="col-md-8 col-xl-6 text-center mx-auto">
                            <h2 className="display-6 text-white fw-bold"><span className="underline">FAQ<br /></span></h2><hr className='text-white' />
                            <p className="text-white mb-5">Curae hendrerit donec commodo hendrerit egestas tempus, turpis facilisis nostra nunc. Vestibulum dui eget ultrices.</p>
                        </div>
                    </div>
                    <div className="row mb-2">
                        <div className="col-md-8 mx-auto">
                            <div className="accordion text-white bg-transparent" role="tablist" id="accordion-1">
                                <div className="accordion-item bg-transparent border-0 ">
                                    <h2 className="accordion-header bg-transparent text-white" role="tab"><button className="accordion-button bg-transparent text-white" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-1 .item-1" aria-expanded="true" aria-controls="accordion-1 .item-1">Aenean arcu euismod aliquam, volutpat consequat?</button></h2>
                                    <div className="accordion-collapse  collapse show item-1" role="tabpanel" data-bs-parent="#accordion-1">
                                        <div className="accordion-body text-white">
                                            <p>Maecenas diam volutpat, erat quis enim cras lobortis vivamus donec tempor. Congue ultrices donec turpis vivamus. Laoreet aenean metus, mi nunc massa feugiat duis. Pharetra erat consequat purus curae quisque, etiam accumsan className.</p>
                                            <p className="mb-0">Commodo rutrum quisque curabitur habitasse, suspendisse etiam.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item bg-transparent border-0">
                                    <h2 className="accordion-header bg-transparent text-white" role="tab"><button className="accordion-button collapsed bg-transparent text-white" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-1 .item-2" aria-expanded="false" aria-controls="accordion-1 .item-2">Lorem quam erat placerat mollis, rhoncus senectus?</button></h2>
                                    <div className="accordion-collapse collapse item-2" role="tabpanel" data-bs-parent="#accordion-1">
                                        <div className="accordion-body text-white">
                                            <p className="mb-0">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item bg-transparent border-0">
                                    <h2 className="accordion-header bg-transparent text-white" role="tab"><button className="accordion-button collapsed bg-transparent text-white" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-1 .item-3" aria-expanded="false" aria-controls="accordion-1 .item-3">Iaculis accumsan id, facilisis proin ipsum velit neque?</button></h2>
                                    <div className="accordion-collapse collapse item-3" role="tabpanel" data-bs-parent="#accordion-1">
                                        <div className="accordion-body text-white">
                                            <p className="mb-0 ">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <footer className='bg-light mb-0'>
                <Footer />
            </footer>
        </div>
    )
}

export default Index