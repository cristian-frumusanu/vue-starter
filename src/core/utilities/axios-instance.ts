import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
  timeout: 30000,
  headers: { 'Content-Type': 'multipart/form-data' },
});

export default axiosInstance;
