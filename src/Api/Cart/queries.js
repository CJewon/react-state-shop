import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteCarts, getCart, getCarts, postCarts, putCarts } from ".";

// 장바구니 전체 목록 조회
export function useGetCarts() {
  return useQuery({
    queryKey: ["carts"],
    queryFn: getCarts,
  });
}

// 특정 장바구니 아이템 조회
export function useGetCart(id) {
  return useQuery({
    queryKey: ["cart", id],
    queryFn: () => getCart(id),
    enabled: !!id,
  });
}

// 장바구니에 새 제품 추가
export function usePostCart() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postCarts,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["carts"] });
    },
  });
}

// 장바구니 제품 수정
export function usePutCart() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }) => putCarts(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["carts"] });
    },
  });
}

// 장바구니 제품 삭제
export function useDeleteCart() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteCarts,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["carts"] });
    },
  });
}
