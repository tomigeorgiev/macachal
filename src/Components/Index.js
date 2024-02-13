import React, { useEffect, useState } from 'react'

import Carousel from './carousel'
import Header from './header'
import Footer from './Footer'
import CartComponent from './CartComponent'

import './style.css'
import './cust.css'
import './animations.css'
import './startup-modern'
import './addscript'

const Index = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const texts = [
        <div>покажеш на тия хора как са пра'и <i className='pink mini'>#OurNextChallenge</i>.</div>,
        <div>гепнеш някоя далаверка... <i className='pink'>евентуално</i>.</div>,
        <div>го имаме. <i class="fa-regular fa-face-smile-beam"></i></div>,
        <div>циментираш тоз' камък. <i class="fa-solid fa-gem"></i></div>,
        "преливаш без да се оливаш.",
        <div>го усмихнеш тоя френски. <i class="fa-regular fa-face-laugh-squint"></i> </div>,
        "изправиш кривите си линии.",
        "тръкнеш на баба ти перлата.",
        <div>скиваш новостите първа. <i class="fa-solid fa-ranking-star"></i></div>
        
    ];

    useEffect(() => {
        const changeText = () => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        };

        const interval = setInterval(changeText, 3000);

        return () => clearInterval(interval);
    }, [texts.length]);

    useEffect(() => {
        const emailTag = document.getElementById('emailtag');
        emailTag.classList.remove('slide-in-text');
        void emailTag.offsetWidth;
        emailTag.classList.add('slide-in-text');
    }, [currentIndex]);

    return (
        <div>
            <header className='headerclass'>
                <Header />
            </header>

            <div className='my-5 py-5 text-center text-white'>
                <div className='mx-5'>
                    <h1 className='markf'><b>Решения за нерешителните</b> </h1>
                    <hr /><br />
                    <p className='px-1 h5  lightt mb-5 '>
                        Всички знаем, че жените никога не знаят какво искат. <b className='markf fw-bold pink'>MACA</b> картите ще бъдат
                        твоята нова кристална топка, която магически отгатва желанията на клиентите ти.
                        С тях изборът е по-лек и от пигмент - едно теглене и цялата магия се разкрива. Времето е скъпоценно,
                        а <b className='markf fw-bold pink'>MACA</b> картите са негов пазител!
                    </p>
                    <a href='/products' className='button-wh-pink markf' >Поръчай</a>
                </div>
            </div>

            <Carousel /><br /><br />

            <div className='opt-in-bal markf'>
                <h3 className='mb-1'>Дай си имейлчето, за да</h3>
                <h3 id='emailtag'>{texts[currentIndex]}</h3>
                <div className='d-flex text-center'>
                    <input type="email" className="form-control mb-2 leftin" id="email" placeholder="Имейл" />
                    <button type="submit" className="btn btn-secondary-outline rightbtn pink  mb-2"><i class="fa-solid fa-circle-arrow-right"></i></button>
                </div>
                <h6 className='par-font-fam'> Няма да споделяме скъпоценния ти имейл с никого. Мъжка дума!</h6>
            </div>

            <section className="pb-5">
                <div className="container pb-5 mb-5">
                    <div className="row mb-2">
                        <div className="col-md-8 col-xl-6 text-center mx-auto">
                            <h2 className="display-6 text-white fw-bold markf"><span className="underline">FAQ<br /></span></h2><hr className='text-white' />
                        </div>
                    </div>
                    <div className="row mb-2 par-font-fam ">
                        <div className="col-md-8 mx-auto">
                            <div className="accordion text-white bg-transparent" role="tablist" id="accordion-1">
                                <div className="accordion-item bg-transparent border-0 ">
                                    <h2 className="accordion-header bg-transparent text-white" role="tab"><button className="accordion-button bg-transparent text-white fm-l" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-1 .item-1" aria-expanded="true" aria-controls="accordion-1 .item-1">Какво има в таз хубава кутийка?</button></h2>
                                    <div className="accordion-collapse  collapse show item-1" role="tabpanel" data-bs-parent="#accordion-1">
                                        <div className="accordion-body text-white">
                                            <p>Maecenas diam volutpat, erat quis enim cras lobortis vivamus donec tempor. Congue ultrices donec turpis vivamus. Laoreet aenean metus, mi nunc massa feugiat duis. Pharetra erat consequat purus curae quisque, etiam accumsan className.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item bg-transparent border-0">
                                    <h2 className="accordion-header bg-transparent text-white" role="tab"><button className="accordion-button collapsed bg-transparent text-white fm-l" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-1 .item-2" aria-expanded="false" aria-controls="accordion-1 .item-2">Ква е схемата?</button></h2>
                                    <div className="accordion-collapse collapse item-2" role="tabpanel" data-bs-parent="#accordion-1">
                                        <div className="accordion-body text-white">
                                            <p className="mb-0">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item bg-transparent border-0">
                                    <h2 className="accordion-header bg-transparent text-white" role="tab"><button className="accordion-button collapsed bg-transparent text-white fm-l" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-1 .item-3" aria-expanded="false" aria-controls="accordion-1 .item-3">Ама аз нямам време да се занимавам с френски и подобни... к'во да правя?</button></h2>
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

            <CartComponent />

            <footer className='bg-light mb-0'>
                <Footer />
            </footer>
        </div>
    )
}

export default Index