import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "@/Components/Button";
import Input from "@/Components/Input";
import styles from "./SignUpPage.module.css";
import { usePostUserMutation } from "@/Api/User/queries";
import { toast } from "react-toastify";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const postUserMutation = usePostUserMutation();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("비밀번호가 일치하지 않습니다.");
      return;
    }

    postUserMutation.mutate(
      { username, email, password },
      {
        onSuccess: () => {
          toast.success("회원가입 성공! 로그인 페이지로 이동합니다.");
          navigate("/auth/login");
        },
        onError: () => {
          toast.error("회원가입 실패. 다시 시도해주세요.");
        },
      }
    );
  };

  return (
    <div className={styles.signUpContainer}>
      <form onSubmit={handleSubmit} className={styles.signUpForm}>
        <h2 className={styles.signUpTitle}>회원가입</h2>

        <Input
          type="text"
          placeholder="사용자 이름"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <Input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          <Link to="/auth/login" className={styles.loginButton}>
            로그인 하러가기
          </Link>
        </div>
      </form>
    </div>
  );
}
