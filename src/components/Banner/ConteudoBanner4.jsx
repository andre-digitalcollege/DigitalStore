import React from 'react'
import WhiteSneakers from './img/White-Sneakers-PNG-Clipart 1.png'
import Ornament11 from './img/Ornament 11.png'
import './banner.css'

function ConteudoBanner4() {
    return (
        <div className="container">
        <img src={Ornament11} alt="Ornament" className='ornamento-11' />
        <img src={WhiteSneakers} alt="Shoe" className='shoe' />
        <p className='mop' >Melhores ofertas personalizadas</p>
        <p className='qsn'>Queima de stoque Nike 🔥</p>
        <p className='texto'>Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur</p>
        <button className='bnt-verOferta'>Ver Oferta</button>
        <div className="carousel">
            <div className="">
            </div>
        </div>
        </div>
    )
  }
  
  export default ConteudoBanner4