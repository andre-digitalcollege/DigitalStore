import styles from "../Categorias.module.css";

export default function SecaoDestaque(props) {
  return (
    <div>
      <div className={styles.hug}>
        <img src={`${props.iconImg}`} alt={props.iconAlt}/>
      </div>
      <div className={styles.tituloCategoria}>
        <h5>{props.tituloCategoria}</h5>
      </div>
    </div>
  );
}
