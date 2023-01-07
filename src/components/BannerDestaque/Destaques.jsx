import React from 'react'
import imgBanner from "../../img/bannerDestaque/imgBannerDestaque.svg";
import './destaque.css'

function Destaques() {
  return (
    <div>
        <div >
            <img className="imagem" src={imgBanner} alt="Imagem banner destaque"/>
        </div>
        <div className="informacoes">
            <p>Oferta especial</p>
            <p>Air Jordan edição de colecionador</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
            <button>Ver Oferta</button>
        </div>
    </div>
  )
}

export default Destaques