import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "@/Pages/Main/MainPage.module.css";
export default function MainPage() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <div className={styles.menuContainer}>
      {isLoggedIn ? (
        <Link to="/products" className={styles.linkTag}>
          제품 리스트 보러가기
        </Link>
      ) : (
        <Link to="/auth/login" className={styles.linkTag}>
          제품 리스트 보러가기
        </Link>
      )}
      {isLoggedIn ? (
        <Link to="/register" className={styles.linkTag}>
          제품 등록하러가기
        </Link>
      ) : (
        <Link to="/auth/login" className={styles.linkTag}>
          제품 등록하러가기
        </Link>
      )}
    </div>
  );
}
