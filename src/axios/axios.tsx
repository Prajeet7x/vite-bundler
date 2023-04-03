import axios from "axios";

export const fetchData = async (endpoint: string) => {
  try {
    const { data } = await axios.get(`https://rickandmortyapi.com/api/${endpoint}`);
    return data.results;
  } catch (err) {
    console.error(err);
  }
};
