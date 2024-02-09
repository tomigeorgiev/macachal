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
        <div>Покажеш на тия хора как са пра'и <i className='text-secondary'>#OurNextChallenge</i></div>,
        <div>Гепнеш някоя далаверка... <i className='text-secondary'>евентуално</i></div>,
        <div>Го имаме <i class="fa-regular fa-face-smile-beam"></i></div>,
        "Циментираш тоз' камък",
        "Преливаш без да се оливаш",
        "Го усмихнеш тоя френски",
        "Изправиш кривите си линии",
        "Тръкнеш на баба ти перлата",
        "Скиваш новостите първа"
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

            <div className='my-5 p-5 mx-5 text-center text-white'>
                <div className='mx-5 px-5'>
                    <h1 className='markf'><b>Решения за нерешителните</b> </h1>
                    <hr /><br />
                    <p className='px-5 h4 lett mx-5 mb-5 '>
                        Всички знаем, че жените никога не знаят какво искат. МАСА картите ще бъдат твоята нова кристална топка, която магически отгатва желанията на клиентите ти. С тях изборът е по-лек и от пигмент - едно теглене и цялата магия се разкрива. Времето е скъпоценно, а МАСА картите са негов пазител!
                    </p>
                    <a href='/products' className='button-wh-pink' >Поръчай</a>
                </div>
            </div>

            <Carousel /><br /><br />

            <div className='opt-in-bal markf'>
                <h4 className='mb-2'>Дай си имейлчето, за да</h4>
                <h3 id='emailtag'>{texts[currentIndex]}</h3>
                <br/>
                <div className='d-flex text-center'>
                    <input type="email" className="form-control mb-2" id="email" placeholder="Имейл" />
                    <button type="submit" className="btn btn-secondary mb-2 mx-2">Добави</button>
                </div>
                <h4 className='par-font-fam'> Няма да споделяме скъпоценния ти имейл с никого. Мъжка дума!</h4>
            </div>

            <section className="py-5 my-5">
                <div className="container py-5">
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