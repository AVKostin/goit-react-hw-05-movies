import { Notify } from "notiflix/build/notiflix-notify-aio";

const TMDB_URL = "https://api.themoviedb.org/3";
const API_KEY = "b3b50e370b6b6fb5970e86b3e5ccd8d7";

export const fetchTrends = async () => {
  try {
    const url = `${TMDB_URL}/trending/movie/week?api_key=${API_KEY}`;
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    Notify.failure("Oops, an error occurred");
  }
};

export const fetchGenres = async () => {
  try {
    const url = `${TMDB_URL}/genre/movie/list?api_key=${API_KEY}`;
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    Notify.failure("Oops, an error occurred");
  }
};

export const fetchFilmDetails = async (id) => {
  try {
    const url = `${TMDB_URL}/movie/${id}?api_key=${API_KEY}`;
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    Notify.failure("Oops, an error occurred");
  }
};

export const fetchFilmVideo = async (id) => {
  try {
    const url = `${TMDB_URL}/movie/${id}/videos?api_key=${API_KEY}`;
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    Notify.failure("Oops, an error occurred");
  }
};

export const fetchCast = async (id) => {
  try {
    const url = `${TMDB_URL}/movie/${id}/credits?api_key=${API_KEY}`;
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    Notify.failure("Oops, an error occurred");
  }
};

export const fetchReviews = async (id) => {
  try {
    const url = `${TMDB_URL}/movie/${id}/reviews?api_key=${API_KEY}`;
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    Notify.failure("Oops, an error occurred");
  }
};

export const fetchSearch = async (query) => {
  try {
    const searchParams = new URLSearchParams({
      api_key: "e236468c654efffdf9704cd975a74a96",
      query: query,
      language: "en-US",
      include_adult: false,
    });
    const url = `${TMDB_URL}/search/movie?${searchParams}`;
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    Notify.failure("Oops, an error occurred");
  }
};
