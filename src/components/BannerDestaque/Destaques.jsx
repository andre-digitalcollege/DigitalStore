import React from 'react'
import imgBanner from "../../img/bannerDestaque/imagemBanner.png";
import './destaque.css'

function Destaques() {
  return (
    <div className='predefinicoesDestaque'>
        <div className='containerImagem'>
            <img className="img" src={imgBanner} alt="Imagem banner destaque"/>
        </div>
        <div className="informacoes">
            <p className='textoDestaque'>Oferta especial</p>
            <p className='tituloProduto'>Air Jordan edição de colecionador</p>
            <p className='descricaoProduto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
            <button>Ver Oferta</button>
        </div>
    </div>
  )
}

export default Destaques