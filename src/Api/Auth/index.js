import axiosClientHelper from "@/utils/networks/axiosClientHelpers";

export async function userLogin({ username, password }) {
  const response = await axiosClientHelper.post("/auth/login", {
    username,
    password,
  });
  return response.data;
}
