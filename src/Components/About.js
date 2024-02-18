import React from 'react'
import macalogo from './images/maca.new.png'

import Footer from './Footer'

import Marina from './images/Marina.png'
import Mila from './images/mila.png'
import Tomi from './images/tommy.png'
import Viktor from './images/Viksuna.png'

const About = () => {
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
            </nav><br /><br /><br /><br />
            <div className='container text-light text-center px-5'>
                <h2 className='markf'>Manicure Cards Challenge</h2>
                <hr />

                <p className='text-justify roboto letr'>
                    Измислихме MacaChallenge след като прекарахме десетки часове в чакане на клиентите да решат какво им се носи и ежедневно бяхме принудени да си изсмукваме от пръстите стотици предложения за цветове и декорации.
                    <br /><br />
                    В екипа имаме 2 маникюристки - едната е с дръпнати очи, а другата много обича да намира кусури и да мрънка (уж градивна критика, ама нали…). Въпреки т’ва, и двете сме меко казано добри с маникюрите. Сайта ни е направен от 19-годишно програмистче, на което му стопихме лагерчетата докато нагласи всяка звездичка в сайта. А пък рекламата ни прави един пич, който си търси работа като маркетолог.
                </p>
                <br />
                <div className='row my-2'>
                    <div className='col-sm-3'>
                        <img src={Marina} height='200' />
                    </div>
                    <div className='col-sm-3'>
                        <img src={Mila} height='200' />
                    </div>
                    <div className='col-sm-3'>
                        <img src={Tomi} height='200' />
                    </div>
                    <div className='col-sm-3'>
                        <img src={Viktor} height='200' />
                    </div>
                </div>
                <p className='roboto mt-5'>
                    Ние сме горди българи и имаме амбиции да станем милионери. Подкрепете ни с DMS MacaMillionaires чрез поръчка в сайта. Обещаваме да харчим част от парите с кеф, другите да ги реинвестираме за ВАС и само за ВАС.
                </p>
                <a href='/cart' className='btn dms markf lett mb-5' >DMS MacaMillionaires</a>
            </div>
            <div className='container text-center text-light mt-2 roboto'>
                <h3>Ако имате въпроси, прочетете Как, Кво, 'Що?</h3>
                <hr />
                <h4>Ако все още  имате въпроси, пишете ни на:</h4>
                <a href='mailto: info@macachallenge.com' className='btn btn-dark'>info@macachallenge.com</a>
                <br /><br />
                <p>Ако не Ви се занимава да ни пишете имейл, може да се свържете с нас и в социалните мрежи:</p>
                
                <div>
                    <a href="#" className="btn btn-light pt-2 pickbtn par-font-fam "><i class="fa-brands fa-tiktok"></i></a>
                    <a href="#" className="btn btn-light pt-2 pickbtn par-font-fam"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="#" className="btn btn-light pt-2 pickbtn par-font-fam"><i class="fa-brands fa-instagram"></i></a>
                </div>
            </div>
            <div className='bg-light mt-5'>
                <Footer />
            </div>
        </div>
    )
}

export default About