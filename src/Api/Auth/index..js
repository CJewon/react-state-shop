import axiosClientHelper from "@/utils/networks/axiosClientHelpers";

export async function userLogin(data) {
  const response = await axiosClientHelper.post("/auth/login", data);
  return response.data;
}
