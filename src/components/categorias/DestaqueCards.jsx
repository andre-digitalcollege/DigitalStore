import CardDestaque from "./CardDestaque";
import styles from "../Categorias.module.css";

export default function DestaqueCards(){
    return (
        <div>
            <div>
                <h3 className={styles.tituloDestaqueCards}>Coleções em destaque</h3>
            </div>
            <div className={styles.cardDestaque}>
                <CardDestaque />
                <CardDestaque />
                <CardDestaque />
            </div>
        </div>
    )
}