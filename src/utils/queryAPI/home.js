import { api } from "../api";

export const getHomeDashboard = async (token) => {
  const res = await api("GET", "home/dashboard", "", token);
  if (res.status === 200) return res.data;
};
