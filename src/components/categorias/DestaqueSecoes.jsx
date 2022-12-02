import SecaoDestaque from "./SecaoDestaque";
import styles from "../Categorias.module.css";

export default function DestaqueSecoes(){
    return (
        <div>
            <div>
                <h3 className={styles.tituloDestaqueSecao}>Coleções em destaque</h3>
            </div>
            <div className={styles.secaoDestaque}>
                <SecaoDestaque />
                <SecaoDestaque />
                <SecaoDestaque />
                <SecaoDestaque />
                <SecaoDestaque />
            </div>
        </div>
    )
}