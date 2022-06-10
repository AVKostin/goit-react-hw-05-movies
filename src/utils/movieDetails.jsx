import { mappedGenreNames } from "./mappedGenreNames";

export const movieDetails = (item) => ({
  id: item.id,
  title: item.title,
  quote: item.tagline,
  overview: item.overview,
  vote_average: item.vote_average,
  vote_count: item.vote_count,
  popularity: item.popularity,
  poster_path: item.poster_path,
  backdrop_path: item.backdrop_path,
  original_title: item.original_title,
  release_date: parseInt(item.release_date),
  genres: mappedGenreNames(item.genres),
});
