import { getUsers, getUser, postUsers, putUsers, deleteUsers } from "./index";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

// 전체 유저 목록 가져오기
export function useUsersQuery() {
  return useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });
}

// 특정 유저 정보 가져오기
export function useUserQuery(id) {
  return useQuery({
    queryKey: ["user", id],
    queryFn: () => getUser(id),
    enabled: !!id, // id가 존재할 때만 실행
  });
}

// 회원가입 (POST)
export function usePostUserMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postUsers,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
}

// 유저 정보 수정 (PUT)
export function usePutUserMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }) => putUsers(id, data),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: ["user", id] });
    },
  });
}

// 유저 삭제 (DELETE)
export function useDeleteUserMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id) => deleteUsers(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
}
