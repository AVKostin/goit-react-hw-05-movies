import { mappedGenreNames } from './mappedGenreNames';

export const movieDetails = item => ({
  id: item.id,
  title: item.title,
  quote: item.tagline,
  overview: item.overview,
  popularity: item.popularity,
  vote_count: item.vote_count,
  poster_path: item.poster_path,
  vote_average: item.vote_average,
  release_date: item.release_date,
  backdrop_path: item.backdrop_path,
  original_title: item.original_title,
  genres: mappedGenreNames(item.genres),
});
