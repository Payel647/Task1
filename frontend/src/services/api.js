import axios from "axios";

const API = axios.create({
  baseURL: "https://leaderboard-backend-2xdh.onrender.com/api",
});

export const fetchUsers = () => API.get("/users");
export const addUser = (name) => API.post("/users", { name });
export const claimPoints = (userId) => API.post(`/claim/${userId}`);
export const fetchHistory = () => API.get("/claim/history");
