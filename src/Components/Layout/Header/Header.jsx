import { Link, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import Button from "@/Components/Button";
import { useSelector } from "react-redux";

export default function Header() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.headerLogo}>
        🛒 fakeStore
      </Link>
      {isLoggedIn ? (
        <Button onClick={handleLogout}>로그아웃</Button>
      ) : (
        <Link to="/auth/login" className={styles.headerLogin}>
          로그인
        </Link>
      )}
    </header>
  );
}
