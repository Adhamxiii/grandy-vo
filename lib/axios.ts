import axios from "axios";

export const Axios = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
});
