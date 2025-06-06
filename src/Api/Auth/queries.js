import { useMutation } from "@tanstack/react-query";
import { userLogin } from "./index.";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "@/features/Auth/AuthSlice";

export function useLoginMutation() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: userLogin,
    onSuccess: (token) => {
      localStorage.setItem("token", token);
      dispatch(login());
      navigate("/");
    },
    onError: (error) => {
      toast.error("로그인 실패. 아이디 또는 비밀번호를 확인해주세요.", error);
    },
  });
}
