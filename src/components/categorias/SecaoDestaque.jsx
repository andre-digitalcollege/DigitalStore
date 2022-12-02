import styles from "../Categorias.module.css";
import iconCamiseta from "../../img/categorias/icon-camisetas.svg"

export default function SecaoDestaque() {
  return (
    <div>
      <div className={styles.hug}>
        <img src={iconCamiseta} alt="camisetas"/>
      </div>
      <div className={styles.tituloCategoria}>
        <h5>Camisetas</h5>
      </div>
    </div>
  );
}
