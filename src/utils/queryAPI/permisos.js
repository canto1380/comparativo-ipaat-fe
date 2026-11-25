import { api } from "../api";

export const getPermisos = async (token) => {
  const res = await api("GET", "permisos", "", token);
  if (res.status === 200) return res.data;
};

export const crearPermiso = async (body, token) => api("POST", "permisos", body, token);

export const eliminarPermiso = async (id, token) => api("DELETE", `permisos/${id}`, null, token);
