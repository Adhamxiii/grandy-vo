import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL

const api = axios.create({
  baseURL: baseURL + "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const { response } = error;

    if (response) {
      console.error(`Error ${response.status}: ${response.statusText}`);
    } else if (error.request) {
      console.error("Network error. Please check your connection.");
    } else {
      console.error("Error:", error.message);
    }

    return Promise.reject(error);
  }
);

export default api;