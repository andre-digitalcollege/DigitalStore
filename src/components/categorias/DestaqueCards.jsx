import CardDestaque from "./CardDestaque";
import styles from "../Categorias.module.css";
import imgDestaqueCamisa from "../../img/categorias/img-destaque-camisa.svg"
import imgDestaqueTenis from "../../img/categorias/img-destaque-tenis.svg"
import imgDestaqueFone from "../../img/categorias/img-destaque-fone.svg"

export default function DestaqueCards(){
    return (
        <div>
            <div>
                <h3 className={styles.tituloDestaqueCards}>Coleções em destaque</h3>
            </div>
            <div className={styles.cardDestaque}>
                <CardDestaque desconto="30% OFF" tituloCard= "Novo drop Supreme" cardImg={imgDestaqueCamisa}/>
                <CardDestaque desconto="30% OFF" tituloCard= "Coleção Adidas" cardImg={imgDestaqueTenis}/>
                <CardDestaque desconto="30% OFF" tituloCard= "Novo Beats Bass" cardImg={imgDestaqueFone}/>
            </div>
        </div>
    )
}