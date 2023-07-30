import axios from "axios";

const BASE_URL = "https://spotify23.p.rapidapi.com";
const options = {
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
    "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
  },
};

const Fetchapi = async (url) => {
  try {
    const response = await axios.get(`${BASE_URL}/${url}`, options);
    return response.data.tracks;
  } catch (error) {
    console.error(error);
  }
};

export default Fetchapi;
