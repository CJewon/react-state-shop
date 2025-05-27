import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

// 전체 유저 목록
export async function getUsers() {
  try {
    const response = await axios.get(`${BASE_URL}/users`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}

// 특정 유저에 대한 GET 요청
export async function getUser(id) {
  try {
    const response = await axios.get(`${BASE_URL}/users/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}

// 유저 추가
export async function postUsers() {
  try {
    const response = await axios.post(`${BASE_URL}/users`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}

// 유저 정보 업데이트(수정)
export async function putUsers(id) {
  try {
    const response = await axios.put(`${BASE_URL}/users/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}

// 유저 정보 삭제
export async function deleteUsers(id) {
  try {
    const response = await axios.delete(`${BASE_URL}/users/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}
