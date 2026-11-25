import { api } from "../api";

export const getRoles = async (token) => {
  const res = await api("GET", "roles", "", token);
  if (res.status === 200) return res.data;
};

export const crearRol = async (body, token) => api("POST", "roles", body, token);

export const actualizarRol = async (id, body, token) => api("PATCH", `roles/${id}`, body, token);

export const eliminarRol = async (id, token) => api("DELETE", `roles/${id}`, null, token);
