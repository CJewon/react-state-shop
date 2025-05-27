import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

// 장바구니에 담긴 전체 제품 목록 GET 요청
export async function getCarts() {
  try {
    const response = await axios.get(`${BASE_URL}/carts`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}

// 장바구니에 담긴 한개의 제품 GET 요청
export async function getCart(id) {
  try {
    const response = await axios.get(`${BASE_URL}/carts/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}

// 장바구니에 담을 제품 POST 요청
export async function postCarts() {
  try {
    const response = await axios.post(`${BASE_URL}/carts`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}

// 장바구니에 들어가있는 제품 수정 PUT 요청
export async function putCarts(id) {
  try {
    const response = await axios.put(`${BASE_URL}/carts/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}

// 장바구니에 들어가있는 제품 삭제 DELETE 요청
export async function deleteCarts(id) {
  try {
    const response = await axios.delete(`${BASE_URL}/carts/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}
