import "./RelatedProducts.css"
import ArrowRight from "../../img/ArrowRight.svg"

export default function RelatedProducts(){
    return(
        <div className="predefinicoesRelatedProducts">
            <div className="headRelatedProducts">
                <div>
                    <h3>Produtos Relacionados</h3>
                </div>
                <div className="moreProducts">
                    <span>Ver todos</span>
                    <img src={ArrowRight} style={{width:"16px", height:"9px"}}/>
                </div>
            </div>
            <div className="relatedProducts">
                ESPAÇO PARA PRODUTOS
            </div>
        </div>
    )
}