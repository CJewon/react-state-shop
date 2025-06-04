import axiosClientHelper from "@/utils/networks/axiosClientHelpers";

// 전체 유저 목록
export async function getUsers() {
  const response = await axiosClientHelper.get("/users");
  return response.data;
}

// 특정 유저에 대한 GET 요청
export async function getUser(id) {
  const response = await axiosClientHelper.get(`/users/${id}`);
  return response.data;
}

// 유저 추가
export async function postUsers(data) {
  const response = await axiosClientHelper.post("/users", data);
  return response.data;
}

// 유저 정보 업데이트(수정)
export async function putUsers(id, data) {
  const response = await axiosClientHelper.put(`/users/${id}`, data);
  return response.data;
}

// 유저 정보 삭제
export async function deleteUsers(id) {
  const response = await axiosClientHelper.delete(`/users/${id}`);
  return response.data;
}
