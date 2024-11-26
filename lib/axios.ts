import axios from "axios";

export const baseURL = "https://grandy-vo-dashboard.vercel.app";

export const Axios = axios.create({
  baseURL: baseURL + "/api",
  headers: {
    "Content-Type": "application/json",
  },
});
