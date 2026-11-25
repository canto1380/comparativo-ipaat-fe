import axios from "axios";
import { getRefreshToken, setRefreshToken, setToken } from "../helpers/helpers";

const url = process.env.REACT_APP_API ? process.env.REACT_APP_API : process.env.REACT_APP_PRODUCTION;
let renovacion = null;

export const renovarSesion = () => {
  if (!renovacion) {
    const pedido = (async () => {
      const refreshToken = getRefreshToken();
      if (!refreshToken) return null;
      const res = await axios.post(`${url}/signin/refresh`, { refreshToken });
      if (res.status !== 200) return null;
      setToken(res.data.token);
      setRefreshToken(res.data.refreshToken);
      window.dispatchEvent(new CustomEvent("ipaat-session", { detail: res.data }));
      return res.data.token;
    })();
    renovacion = pedido.finally(() => {
      renovacion = null;
    });
  }
  return renovacion.catch(() => null);
};

export const solicitar = async (config, reintento = false) => {
  try {
    return await axios(config);
  } catch (error) {
    const status = error?.response?.status;
    const esRefresh = String(config.url || "").includes("signin/refresh");
    if (status === 401 && !reintento && !esRefresh) {
      const token = await renovarSesion();
      if (token) {
        return solicitar({
          ...config,
          headers: { ...config.headers, authorization: token },
        }, true);
      }
    }
    return error;
  }
};
