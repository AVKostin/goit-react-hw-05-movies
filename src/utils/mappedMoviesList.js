import { filteredGenres } from "./filteredGenres";

export const mappedMoviesList = (genresList, list) =>
    list.map((item) => ({
        id: item.id,
        title: item.title,
        poster_path: item.poster_path,
        release_date: parseInt(item.release_date),
        vote_average: item.vote_average.toFixed(1),
        genres: filteredGenres(genresList, item.genre_ids),
    }));
