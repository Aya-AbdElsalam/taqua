import { default as axios } from "axios";
const apiUrl = "https://api.alquran.cloud/v1";
const axiosClientQuran = axios.create({
  baseURL: apiUrl,
});
export default axiosClientQuran;
