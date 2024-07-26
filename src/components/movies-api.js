import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
const API_KEY = "ce1844e25f92f5e998a110cd12568784";

export const getMovie = async () => {
  const response = await axios.get(`/movie/popular?api_key=${API_KEY}`);
  return response.data;
};

export const getMovieById = async (movieID) => {
  const response = await axios.get(`/movie/${movieID}?api_key=${API_KEY}`);
  return response.data;
};
