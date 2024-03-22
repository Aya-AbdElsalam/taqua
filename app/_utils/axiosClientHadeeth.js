import { default as axios } from "axios";
const apiUrl = "https://hadeethenc.com/api/v1/";
const axiosClientHadeeth = axios.create({
  baseURL: apiUrl,
});
export default axiosClientHadeeth;
