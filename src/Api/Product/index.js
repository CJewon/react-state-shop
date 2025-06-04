import axiosClientHelper from "@/utils/networks/axiosClientHelpers";

// 전체 제품 목록 GET 요청
export async function getProducts() {
  const response = await axiosClientHelper.get("/products");
  return response.data;
}

// 하나의 제품 GET 요청
export async function getProduct(id) {
  const response = await axiosClientHelper.get(`/products/${id}`);
  return response.data;
}

// 하나의 제품 POST 요청
export async function postProducts(data) {
  const response = await axiosClientHelper.post("/prouducts", data);
  return response.data;
}

// 하나의 제품 PUT 요청
export async function putProducts(id, data) {
  const response = await axiosClientHelper.put(`/products/${id}`, data);
  return response;
}

// 하나의 제품 DELETE 요청
export async function deleteProducts(id) {
  const response = await axiosClientHelper.delete(`/products/${id}`);
  return response.data;
}
