import { Notify } from "notiflix/build/notiflix-notify-aio";
import { api_key } from '../constants';
import { BASE_URL } from '../constants';

Notify.init({
	position: 'center-top',
	width: '400px',
  fontSize: '18px',
  cssAnimationStyle: "from-right",
});

export const fetchTrends = async () => {
  try {
    const url = `${BASE_URL}/trending/movie/week?api_key=${api_key}`;
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    Notify.failure("Oops, an error occurred");
  }
};

export const fetchGenres = async () => {
  try {
    const url = `${BASE_URL}/genre/movie/list?api_key=${api_key}`;
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    Notify.failure("Oops, an error occurred");
  }
};

export const fetchFilmDetails = async (id) => {
  try {
    const url = `${BASE_URL}/movie/${id}?api_key=${api_key}`;
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    Notify.failure("Oops, an error occurred");
  }
};

export const fetchFilmVideo = async (id) => {
  try {
    const url = `${BASE_URL}/movie/${id}/videos?api_key=${api_key}`;
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    Notify.failure("Oops, an error occurred");
  }
};

export const fetchCast = async (id) => {
  try {
    const url = `${BASE_URL}/movie/${id}/credits?api_key=${api_key}`;
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    Notify.failure("Oops, an error occurred");
  }
};

export const fetchReviews = async (id) => {
  try {
    const url = `${BASE_URL}/movie/${id}/reviews?api_key=${api_key}`;
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    Notify.failure("Oops, an error occurred");
  }
};

export const fetchSearch = async (query) => {
  try {
    const searchParams = new URLSearchParams({
      api_key: "api_key",
      query: query,
      language: "en-US",
      include_adult: false,
    });
    const url = `${BASE_URL}/search/movie?${searchParams}`;
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    Notify.failure("Oops, an error occurred");
  }
};