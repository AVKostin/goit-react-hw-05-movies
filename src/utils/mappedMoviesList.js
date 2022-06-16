import { filteredGenres } from "./filteredGenres";

export const mappedMoviesList = (genresList, list) =>
  list.map((item) => ({
    id: item.id,
    title: item.title,
    poster_path: item.poster_path,
    genres: filteredGenres(genresList, item.genre_ids),
    vote_average: item.vote_average.toFixed(1),
    release_date: parseInt(item.release_date),
  }));