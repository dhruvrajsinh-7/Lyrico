const API_URL = "http://localhost:3000";
import { data } from "autoprefixer";
import axios from "axios";

// export const HTTPunsecurePOSTRequest = async (route, data) => {
//   try {
//     const response = await axios.post(API_URL + route, data, {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };
export const HTTPunsecurePOSTRequest = async (route, data) => {
  const response = await axios.post(API_URL + route, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const formattedResponse = await response.data;
  return formattedResponse;
};

export const HTTPsecurePOSTRequest = async (route, body) => {
  try {
    const token = getToken();
    const response = await axios.post(API_URL + route, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const HTTPsecureGETRequest = async (route) => {
  try {
    const token = getToken();
    const response = await axios.get(API_URL + route, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getToken = () => {
  const accessToken = document.cookie.replace(
    /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
    "$1"
  );
  return accessToken;
};
