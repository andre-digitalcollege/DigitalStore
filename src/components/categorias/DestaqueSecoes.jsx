import SecaoDestaque from "./SecaoDestaque";
import styles from "../Categorias.module.css";
import iconCamisetas from "../../img/categorias/icon-camisetas.svg"
import iconCalcas from "../../img/categorias/icon-calcas.svg"
import iconBones from "../../img/categorias/icon-bones.svg"
import iconHeadphones from "../../img/categorias/icon-headphones.svg"
import iconTenis from "../../img/categorias/icon-tenis.svg"

export default function DestaqueSecoes(){
    return (
        <div>
            <div>
                <h3 className={styles.tituloDestaqueSecao}>Coleções em destaque</h3>
            </div>
            <div className={styles.secaoDestaque}>
                <SecaoDestaque iconImg={iconCamisetas} iconAlt="Categoria Camisetas" tituloCategoria="Camisetas"/>
                <SecaoDestaque iconImg={iconCalcas} iconAlt="Categoria Calças" tituloCategoria="Calças"/>
                <SecaoDestaque iconImg={iconBones} iconAlt="Categoria Bonés" tituloCategoria="Bonés"/>
                <SecaoDestaque iconImg={iconHeadphones} iconAlt="Categoria Headphones" tituloCategoria="Headphones"/>
                <SecaoDestaque iconImg={iconTenis} iconAlt="Categoria Tênis" tituloCategoria="Tênis"/>
            </div>
        </div>
    )
}