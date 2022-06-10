import { filteredGenres } from "utils/filteredGenres";

export const mappedMovies = (genresList, list) =>
  list.map((item) => ({
    id: item.id,
    title: item.title,
    poster_path: item.poster_path,
    genres: filteredGenres(genresList, item.genre_ids),
  }));
