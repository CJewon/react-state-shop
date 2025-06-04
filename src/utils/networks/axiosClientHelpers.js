import axios from "axios";

const axiosClientHelper = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

export default axiosClientHelper;
