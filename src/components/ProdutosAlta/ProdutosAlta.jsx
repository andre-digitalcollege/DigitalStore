import './produtosAlta.css';
import CardProduto from './CardProduto';
import CardProdutoDesconto from './CardProdutoDesconto';
import imgSeta from "../../img/produtosAlta/seta.svg";

export default function ProdutosAlta(){
    return (
        <section className="predefinicoes">
            <div className="headLine">
                <div className="tituloProdutosEmAlta">
                    <h3>Produtos em alta</h3>
                </div>
                <div className="verTodos">
                    <p>Ver todos</p>
                    <img src={imgSeta} alt="imagem seta"/>
                </div>
            </div>
            <div className="cards">
                <CardProdutoDesconto />
                <CardProdutoDesconto />
                <CardProduto />
                <CardProduto />
                <CardProduto />
                <CardProduto />
                <CardProduto />
                <CardProduto />
            </div>
        </section>
    )
     
 }