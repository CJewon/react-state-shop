import axiosClientHelper from "@/utils/networks/axiosClientHelpers";

// 장바구니에 담긴 전체 제품 목록 GET 요청
export async function getCarts() {
  const response = await axiosClientHelper.get("/carts");
  return response.data;
}

// 장바구니에 담긴 한개의 제품 GET 요청
export async function getCart(id) {
  const response = await axiosClientHelper.get(`/carts/${id}`);
  return response.data;
}

// 장바구니에 담을 제품 POST 요청
export async function postCarts(data) {
  const response = await axiosClientHelper.post("/carts", data);
  return response.data;
}

// 장바구니에 들어가있는 제품 수정 PUT 요청
export async function putCarts(id, data) {
  const response = await axiosClientHelper.put(`/carts/${id}`, data);
  return response.data;
}

// 장바구니에 들어가있는 제품 삭제 DELETE 요청
export async function deleteCarts(id) {
  const response = await axiosClientHelper.delete(`/carts/${id}`);
  return response.data;
}
