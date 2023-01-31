import axios from "axios";

const URL_API = "https://api.themoviedb.org/3/movie/";
const API_KEY = "33e49b5813eb54a7bad9378df019b842";

export const getAllMovies = async (page=1) => {
  try {
    const response = await axios(
      `${URL_API}popular?api_key=${API_KEY}&language=es-ES&page=${page}`
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
