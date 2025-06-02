import { Link } from "react-router-dom";
import styles from "./ProductItem.module.css";

export default function ProductItem({ product }) {
  return (
    <li key={product.id} className={styles.ProductList}>
      <Link to={`/product/${product.id}`} className={styles.link}>
        <img
          src={product.image}
          alt={product.description}
          className={styles.image}
        ></img>
        <h3 className={styles.h3}>{product.title}</h3>
        <p className={styles.p}>{product.price}</p>
      </Link>
    </li>
  );
}
