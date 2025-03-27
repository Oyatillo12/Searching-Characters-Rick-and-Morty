import axios from "axios";

export const useAxios = () =>
  axios.create({
    baseURL: "https://rickandmortyapi.com/api",
    timeout: 10000,
    headers: {
      "Content-Type": "application/json",
    },
  });
