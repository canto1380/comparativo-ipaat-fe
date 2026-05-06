import { apiParams } from "../api";

export const getDiasParadas = async (params) => {
  console.log(params)
  const res = await apiParams("GET", params, `diaParada/`, "");
  if (res.status === 200) {
    const data = res.data;
    return data;
  }
};