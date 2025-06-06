import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@/Components/Button";
import Input from "@/Components/Input";
import styles from "./SignUpPage.module.css"; // 스타일 따로 관리하고 싶을 경우

export default function SignUp() {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
  };

  return (
    <div className={styles.signUpContainer}>
      <form onSubmit={handleSubmit} className={styles.signUpForm}>
        <h2 className={styles.signUpTitle}>회원가입</h2>
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
        <Input
          type="password"
          placeholder="비밀번호 확인"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button type="submit">회원가입</Button>
        <div className={styles.loginContainer}>
          <p className={styles.loginText}>이미 계정이 있으신가요?</p>
          <Link to="/auth/signIn" className={styles.loginButton}>
            로그인 하러가기
          </Link>
        </div>
      </form>
    </div>
  );
}
