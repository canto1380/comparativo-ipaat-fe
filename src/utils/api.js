import { solicitar } from "./sesion";
import { getTokenLS } from "../helpers/helpers";

const url = process.env.REACT_APP_API ? process.env.REACT_APP_API : process.env.REACT_APP_PRODUCTION;
const cabecera = (token) => ({ authorization: `${token || getTokenLS() || ""}` });

export const api = async (method, endpoint, data, token) => {
  return solicitar({
    data,
    headers: cabecera(token),
    method,
    url: `${url}/${endpoint}`,
  });
};

export const apiParams = async (method, params, endpoint, data, token) => {
  return solicitar({
    data,
    params,
    headers: cabecera(token),
    method,
    url: `${url}/${endpoint}`,
  });
};
