import styles from "../Categorias.module.css";

export default function CardDestaque() {
  return (
    <div className={styles.card}>
      <div className={styles.conteudoCard}>
        <span>30% OFF</span>
        <p>Novo drop Supreme</p>
        <button>Comprar</button>
      </div>
    </div>
  );
}
