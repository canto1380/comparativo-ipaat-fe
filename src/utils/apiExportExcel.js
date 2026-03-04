import axios from "axios";
const url =  process.env.REACT_APP_API ? process.env.REACT_APP_API : process.env.REACT_APP_PRODUCTION
export const apiExportExcel = async (method, endpoint, data, token) => {
  try {
    const res = await axios({
        headers: {
            authorization: `${token}`,
            'Content-Type': 'application/json',
          },
          method,
          url: `${url}/${endpoint}`,
          data: JSON.stringify({data}),
          responseType: "arraybuffer"
    });
    return res
  } catch (error) {
    return error
  }
};