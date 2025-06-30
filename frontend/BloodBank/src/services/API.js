import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL, // e.g., http://localhost:5000/api/v1
});

// Attach token to every request if available
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
