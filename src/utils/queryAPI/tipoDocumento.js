import { api } from "../api";

export const getTiposDocumento = async (token) => {
  const res = await api("GET", "tipoDocumento", "", token);
  if (res.status === 200) return res.data;
};
