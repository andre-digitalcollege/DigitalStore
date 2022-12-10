import styles from './Categorias.module.css'
import DestaqueCards from "./categorias/DestaqueCards.jsx";
import DestaqueSecoes from "./categorias/DestaqueSecoes.jsx";


export default function Categorias(){
    return (
        <div className={styles.predefinicoes}>
            <DestaqueCards/>
            <DestaqueSecoes/>
        </div>
    )
}