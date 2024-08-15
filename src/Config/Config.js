import axios from "axios";

//export const API_BASE_URL = "http://localhost:8080";
export const API_BASE_URL = "https://backend-nyds.onrender.com";

const token = localStorage.getItem("token");

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
});

export const apii = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    // "Authorization":`Bearer ${token}`,
    "Content-Type": "application/json",
  },
});
