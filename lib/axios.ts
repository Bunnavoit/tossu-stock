import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const axiosClient = axios.create({
  baseURL: BASE_URL,
});
// axiosClient.interceptors.request.use((config) => {
//   const token = localStorage.getItem("accessToken");
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

export default axiosClient;
