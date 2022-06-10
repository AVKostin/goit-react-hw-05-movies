import { Notify } from 'notiflix/build/notiflix-notify-aio';

const base_url = 'https://api.themoviedb.org/3';
const api_key = 'b3b50e370b6b6fb5970e86b3e5ccd8d7';

export const fetchTrends = async () => {
  try {
    const url = `${base_url}/trending/movie/week?api_key=${api_key}`;
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    Notify.failure('Oops, an error occurred');
  }
};

export const fetchGenres = async () => {
  try {
    const url = `${base_url}/genre/movie/list?api_key=${api_key}`;
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    Notify.failure('Oops, an error occurred');
  }
};

export const fetchFilmDetails = async id => {
  try {
    const url = `${base_url}/movie/${id}?api_key=${api_key}`;
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    Notify.failure('Oops, an error occurred');
  }
};

export const fetchFilmVideo = async id => {
  try {
    const url = `${base_url}/movie/${id}/videos?api_key=${api_key}`;
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    Notify.failure('Oops, an error occurred');
  }
};

export const fetchCast = async id => {
  try {
    const url = `${base_url}/movie/${id}/credits?api_key=${api_key}`;
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    Notify.failure('Oops, an error occurred');
  }
};

export const fetchReviews = async id => {
  try {
    const url = `${base_url}/movie/${id}/reviews?api_key=${api_key}`;
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    Notify.failure('Oops, an error occurred');
  }
};

export const fetchSearch = async query => {
  try {
    const searchParams = new URLSearchParams({
      api_key: 'b3b50e370b6b6fb5970e86b3e5ccd8d7',
      query: query,
      language: 'en-US',
      include_adult: false,
    });
    const url = `${base_url}/search/movie?${searchParams}`;
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    Notify.failure('Oops, an error occurred');
  }
};
