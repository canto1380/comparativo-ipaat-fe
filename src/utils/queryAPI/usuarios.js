import { api } from "../api";

export const getUsuariosById = async (id, token) => {
  const res = await api("GET", `usuarios/${id}`, "", token);
  if (res.status === 200) return res.data;
};

export const getUsuarios = async (token) => {
  const res = await api("GET", "usuarios/allUser", "", token);
  if (res.status === 200) return res.data;
};

export const crearUsuario = async (body, token) => api("POST", "usuarios/createUser", body, token);

export const actualizarUsuario = async (id, body, token) => api("PATCH", `usuarios/${id}`, body, token);

export const eliminarUsuario = async (id, token) => api("PUT", `usuarios/delete/${id}`, null, token);

export const deshabilitarUsuario = async (id, token) => api("PUT", `usuarios/disable/${id}`, null, token);

export const habilitarUsuario = async (id, token) => api("PUT", `usuarios/restore/${id}`, null, token);
