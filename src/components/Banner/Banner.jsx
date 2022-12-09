import React from 'react'
import './banner.css'
import WhiteSneakers from './img/White-Sneakers-PNG-Clipart 1.png'
import Ornament11 from './img/Ornament 11.png'
import Carousel from './carousel'

export default function Banner() {
    return (
        <div className='container'>
            <div className="info">
                <div>
                    <p className='mop' >Melhores ofertas personalizadas</p>
                    <p className='qsn'>Queima de stoque Nike 🔥</p>
                    <p className='texto'>Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur</p>
                    <button className='bnt-verOferta'>Ver Oferta</button>
                </div>
                <div>
                    <img src={WhiteSneakers} alt="Shoe" className='shoe' />
                </div>
                <div>
                    <img src={Ornament11} alt="Ornament" className='ornamento-11' />
                </div>
            </div>
            <Carousel />
        </div>
    );
}