import { api } from "../api";

export const getRolesPermisos = async (token) => {
  const res = await api("GET", "rolesPermisos", "", token);
  if (res.status === 200) return res.data;
};

export const asignarRolPermiso = async (body, token) => api("POST", "rolesPermisos", body, token);
