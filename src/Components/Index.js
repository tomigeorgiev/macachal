import React, { useEffect, useState, useRef } from 'react'

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

import Carousel from './carousel'
import Header from './header'
import Footer from './Footer'
import CartComponent from './CartComponent'

import './style.css'
import './cust.css'
import './animations.css'
import './startup-modern'
import './addscript'

import EmailSenderRepository from '../data/email_sender_repository'

const firebaseConfig = {
    apiKey: "AIzaSyBQNjTNQg1uir5ZPE_zMq7NWsKs5Mfnk-I",
    authDomain: "maca-new.firebaseapp.com",
    projectId: "maca-new",
    storageBucket: "maca-new.appspot.com",
    messagingSenderId: "1047665209780",
    appId: "1:1047665209780:web:e23626654c4536ff3dc2e1"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const Index = () => {
    const [email, setEmail] = useState('');
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

    const faqRef = useRef(null);

    useEffect(() => {
        if (window.location.hash === '#faq' && faqRef.current) {
            faqRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const timestamp = firebase.firestore.FieldValue.serverTimestamp();
            const emailData = {
                email: email,
                datata: timestamp, 
                status: 'Активен'
            };
            await firebase.firestore().collection('emails').add(emailData);

            alert('Имейлът е успешно добавен!');
            setEmail(''); 

        } catch (error) {
            console.error('Грешка при запис на имейла:', error);
            alert('Възникна грешка. Моля, опитайте отново.');
        }
    };

    return (
        <div>
            <header className='headerclass'>
                <Header />
            </header>

            <div className='my-5 py-5 textresp text-center text-white'>
                <div className='mx-5'>
                    <h1 className='markf'><b>Решения за нерешителните</b> </h1>
                    <hr /><br />
                    <p className='px-1 h5  lightt mb-5 '>
                        Всички знаем, че жените никога не знаят какво искат. <b className='markf fw-bold pink'>MaCa</b> картите ще бъдат
                        твоята нова кристална топка, която магически отгатва желанията на клиентите ти.
                        С тях изборът е по-лек и от пигмент - едно теглене и цялата магия се разкрива. Времето е скъпоценно,
                        а <b className='markf fw-bold pink'>MaCa</b> картите са негов пазител!
                    </p>
                    <a href='/products' className='button-wh-pink markf' >Поръчай</a>
                </div>
            </div>

            <Carousel /><br /><br />

            <div className='opt-in-bal markf'>
                <h3 className='mb-1'>Дай си имейлчето, за да</h3>
                <h3 id='emailtag'>{texts[currentIndex]}</h3>
                <form onSubmit={handleSubmit}>
                    <div className='d-flex text-center'>
                        <input
                            type="email"
                            className="form-control mb-2 leftin"
                            id="email"
                            placeholder="Имейл"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button type="submit" className="btn btn-secondary-outline rightbtn pink  mb-2">
                            <i className="fa-solid fa-circle-arrow-right"></i>
                        </button>
                    </div>
                </form>
                <h6 className='par-font-fam'> Няма да споделяме скъпоценния ти имейл с никого. Мъжка дума!</h6>
            </div>

            <section className="pb-5" id='faq' ref={faqRef}>
                <div className="container pb-5 mb-5">
                    <div className="row mb-2">
                        <div className="col-md-8 col-xl-6 text-center mx-auto">
                            <h2 className="display-6 text-white fw-bold markf"><span className="underline">Как, К'во, 'Що ? <br /></span></h2><hr className='text-white' />
                        </div>
                    </div>
                    <div className="row mb-2 par-font-fam ">
                        <div className="col-md-8 mx-auto">
                            <div className="accordion text-white bg-transparent" role="tablist" id="accordion-1">
                                <div className="accordion-item bg-transparent border-0 ">
                                    <h2 className="accordion-header bg-transparent text-white" role="tab"><button className="accordion-button bg-transparent text-white fm-l" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-1 .item-1" aria-expanded="true" aria-controls="accordion-1 .item-1">Какво има в таз' хубава кутийка?</button></h2>
                                    <div className="accordion-collapse  collapse show item-1" role="tabpanel" data-bs-parent="#accordion-1">
                                        <div className="accordion-body text-white">
                                            <p>
                                                Решението на всичките ти проблеми!<br />
                                                Шегуваме се.<br />
                                                В кутията има 26 карти, които сме рисували поне 6 месеца. Не се и съмняваме че си интелигентна, но все пак сме сложили и една карта с инструкции, за всеки случай. И понеже сме готини, ти подаряваме и стикерче, с което да си украсиш икейската лампа.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item bg-transparent border-0">
                                    <h2 className="accordion-header bg-transparent text-white" role="tab"><button className="accordion-button collapsed bg-transparent text-white fm-l" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-1 .item-2" aria-expanded="false" aria-controls="accordion-1 .item-2">К'ва е схемата?</button></h2>
                                    <div className="accordion-collapse collapse item-2" role="tabpanel" data-bs-parent="#accordion-1">
                                        <div className="accordion-body text-white">
                                            <p className="mb-0">
                                                Много е проста. Покрили сме всяка потенциална чуденка с 6те ни рунда, тъй като всички знаем, че стане ли въпрос за взимане на решения, жените ник’ви ги няма.

                                                На всеки рунд, маникюристът подава картите с гръб към клиента, той тегли, маникюристът изпълнява - и туй то.
                                                <br />
                                                <br />
                                                Единствената тънкост е в Рунд 3 “Дизайн" - Ако клиентът изтегли карта “С декорация” се играе Рунд 4 “Декорация". Ако изтегли “Изчистени”, пропускате и продължавате към Рунд 5 “Цвят".
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item bg-transparent border-0">
                                    <h2 className="accordion-header bg-transparent text-white" role="tab">
                                        <button className="accordion-button collapsed bg-transparent text-white fm-l" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-1 .item-3" aria-expanded="false" aria-controls="accordion-1 .item-3">Ама аз нямам време да се занимавам с френски, омбре и подобни… к'во да правя?</button>
                                    </h2>
                                    <div className="accordion-collapse collapse item-3" role="tabpanel" data-bs-parent="#accordion-1">
                                        <div className="accordion-body text-white">
                                            <p className="mb-0 ">
                                                Щом нямаш време, махаш картите от тестето, с които не ти се занимава, все едно никога не ги е имало и играеш!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='accordion-item bg-transparent border-0'>
                                    <h2 className='accordion-header bg-transparent text-white' role='tab'>
                                        <button className="accordion-button collapsed bg-transparent text-white fm-l" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-1 .item-4" aria-expanded="false" aria-controls="accordion-1 .item-4">Ами ако не мога да рисувам?</button>
                                    </h2>
                                    <div className='accordion-collapse collapse item-4' role='tabpanel' data-bs-parent="#accordion-1">
                                        <div className='accordion-body text-white'>
                                            <p className='mb-0'>
                                                Не всеки е Пикасо, затова сме сложили карти само с бързи салонни декорации. Ако и те ти се опъват, дай си имейлчето - там периодично ще ти пращаме tips & tricks, с които ще се научиш как да правиш френски като на рускините, да преливаш плавно цветовете, да слагаш камъчета, които да не мърдат до следващия маникюр, да втриваш и запечатваш пигменти, да рисуваш тънки, прави линии, да отпечатваш фолио, да лепиш ваденки, да слагаш печати и т.н.
                                            </p>
                                        </div>
                                    </div>

                                </div>
                                <div className='accordion-item bg-transparent border-0'>
                                    <h2 className='accordion-header bg-transparent text-white' role='tab'>
                                        <button className="accordion-button collapsed bg-transparent text-white fm-l" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-1 .item-5" aria-expanded="false" aria-controls="accordion-1 .item-5">Ще има ли други карти?</button>
                                    </h2>
                                    <div className='accordion-collapse collapse item-5' role='tabpanel' data-bs-parent="#accordion-1">
                                        <div className='accordion-body text-white'>
                                            <p className='mb-0'>
                                                Съвсем скоро ще избухнем със следващата ни колекция. Последвай ни, за да не изпуснеш <i class="fa-regular fa-face-smile-wink"></i>.
                                            </p>
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