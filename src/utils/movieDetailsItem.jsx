import { mappedGenreNames } from "./mappedGenreNames";

export const MovieDetailsItem = (item) => ({
  id: item.id,
  title: item.title,
  quote: item.tagline,
  overview: item.overview,
  popularity: item.popularity,
  vote_count: item.vote_count,
  poster_path: item.poster_path,
  vote_average: item.vote_average,
  backdrop_path: item.backdrop_path,
  original_title: item.original_title,
  release_date: parseInt(item.release_date),
  genres: mappedGenreNames(item.genres),
});
