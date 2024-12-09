import axios from "axios";

export const axiosInstance = axios.create({
  // baseURL: "http://localhost:5555",
  baseURL: "https://amazon-api-backend-deploy-y7dw.onrender.com",
});
