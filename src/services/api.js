import axios from "axios";

const token = localStorage.getItem("token")

const api = axios.create({
    baseURL: "https://dhodonto.ctdprojetos.com.br/",
    headers: {"Authorization": "Bearer "+ token}
  });
  
  export default api;