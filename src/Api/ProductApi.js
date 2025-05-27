import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

// 전체 제품 목록 GET 요청
export async function getProducts() {
  try {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}

// 하나의 제품 GET 요청
export async function getProduct(id) {
  try {
    const response = await axios.get(`${BASE_URL}/products/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}

// 하나의 제품 POST 요청
export async function postProducts() {
  try {
    const response = await axios.post(`${BASE_URL}/products`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}

// 하나의 제품 PUT 요청
export async function putProducts(id) {
  try {
    const response = await axios.put(`${BASE_URL}/products/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}

// 하나의 제품 DELETE 요청
export async function deleteProducts(id) {
  try {
    const response = await axios.delete(`${BASE_URL}/products/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}
