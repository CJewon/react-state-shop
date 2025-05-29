import { Link } from "react-router-dom";
import styles from "./MainPage.module.css";

export default function MainPage() {
  return (
    <div className={styles.menuContainer}>
      <Link to="/products" className={styles.linkTag}>
        제품 리스트 보러가기
      </Link>
      <Link to="/register" className={styles.linkTag}>
        제품 등록하러가기
      </Link>
    </div>
  );
}
