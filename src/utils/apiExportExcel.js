import { solicitar } from "./sesion";
import { getTokenLS } from "../helpers/helpers";

const url = process.env.REACT_APP_API ? process.env.REACT_APP_API : process.env.REACT_APP_PRODUCTION;

export const apiExportExcel = async (method, endpoint, data, token) => {
  return solicitar({
    headers: {
      authorization: `${token || getTokenLS() || ""}`,
      "Content-Type": "application/json",
    },
    method,
    url: `${url}/${endpoint}`,
    data: JSON.stringify({ data }),
    responseType: "arraybuffer",
  });
};
