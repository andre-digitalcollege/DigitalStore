import styles from "../Categorias.module.css";

export default function CardDestaque(props) {
  return (
    <div style={{backgroundImage: `url(${props.cardImg})`}} className={styles.card}>
      <div className={styles.conteudoCard}>
        <span>{props.desconto}</span>
        <p>{props.tituloCard}</p>
        <button>Comprar</button>
      </div>
    </div>
  );
}
