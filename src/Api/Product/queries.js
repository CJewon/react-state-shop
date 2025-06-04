import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  deleteProducts,
  getProduct,
  getProducts,
  postProducts,
  putProducts,
} from ".";

// 제품 전체 목록 조회
export function useGetProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
}

// 특정 제품 조회
export function useGetProduct(id) {
  return useQuery({
    queryKey: ["product"],
    queryFn: () => getProduct(id),
  });
}

// 제품 등록하기
export function usePostProducts() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postProducts,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
}

// 제품 수정하기
export function usePutProducts() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }) => putProducts(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
}

// 제품 삭제하기
export function useDeleteProducts() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteProducts,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
}
