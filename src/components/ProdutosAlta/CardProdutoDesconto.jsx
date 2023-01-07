import React from 'react'
import './cardProduto.css'

function CardProdutoDesconto() {
  return (
    <div className='cardImg'>
      <div className='imgCard'>
        <div className='desconto'>
          <p className='percentualDesconto'>30% OFF</p>
        </div>
      </div>
      <div className='descricaoProduto'>
        <p className='categoria'>Categoria</p>
        <p className='tituloProdutoNovo'>K-Swiss V8 - Masculino</p>
        <div className='precos'>
          <p className='preco'>$ 200</p>
          <p className='precoComDesconto'>$ 100</p>
        </div>
      </div>
    </div>
  )
}

export default CardProdutoDesconto