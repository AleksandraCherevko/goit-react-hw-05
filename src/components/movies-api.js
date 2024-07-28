import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
const API_KEY = "ce1844e25f92f5e998a110cd12568784";

export const getMovie = async () => {
  const response = await axios.get(`/movie/popular?api_key=${API_KEY}`);
  return response.data.results; // Ensure you return the results array
};

export const getMovieById = async (movieID) => {
  const response = await axios.get(`/movie/${movieID}?api_key=${API_KEY}`);
  return response.data;
};

export const movieReviews = async (movieID) => {
  const response = await axios.get(
    `/movie/${movieID}/reviews?api_key=${API_KEY}`
  );
  return response.data;
};

export const movieCredits = async (movieID) => {
  const response = await axios.get(
    `/movie/${movieID}/credits?api_key=${API_KEY}`
  );
  return response.data;
};

export const searchMovie = async (query) => {
  const response = await axios.get(
    `/search/movie?query=${query}&api_key=${API_KEY}`
  );
  return response.data.results;
};

export const trendingMovies = async (timeWindow) => {
  const response = await axios.get(
    `/trending/movie/${timeWindow}?api_key=${API_KEY}`
  );
  return response.data.results;
};
