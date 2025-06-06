import { useLoginMutation } from "@/Api/Auth/queries";
import Button from "@/Components/Button";
import Input from "@/Components/Input";
import { useState } from "react";
import styles from "./LoginPage.module.css";
import { Link } from "react-router-dom";

export default function Login() {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginMutation = useLoginMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    loginMutation.mutate({ userEmail, password });
  };

  return (
    <div className={styles.loginContainer}>
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <h2 className={styles.loginTitle}>로그인</h2>
        <Input
          type="email"
          placeholder="이메일"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">로그인</Button>
        <div className={styles.signUpContainer}>
          <p className={styles.signUpText}>아직 회원이 아니신가요 ?</p>
          <Link to="/auth/signUp" className={styles.signUpButton}>
            회원가입 하러가기
          </Link>
        </div>
      </form>
    </div>
  );
}
