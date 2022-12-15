import React from "react"

export default function ListaCards(){
    return (
        <section style={{ display: 'inline-block', border:'1px solid #ccc'}}>
            <p>promoção</p>
            <div className='flex justify-center '>
                IMAGEM
            </div>
            <h2 className='text-lg'>Titulo</h2>
            <p className='text-sm'>Descrição e preço</p>
        </section>
    )
 }