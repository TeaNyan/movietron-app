import axios from "axios";

const apiKey = process.env.API_KEY;

export const fetchMovies = async (searchTerm: string, page: number = 1) => {
  const response = await axios.get(
    `https://www.omdbapi.com/?s=${searchTerm}&plot=full&r=json&apikey=${apiKey}&page=${page}`
  );
  return response.data;
};

export const fetchMovieDetails = async (id: string) => {
  const response = await axios.get(
    `https://www.omdbapi.com/?apikey=${apiKey}&i=${id}`
  );
  return response.data;
};
