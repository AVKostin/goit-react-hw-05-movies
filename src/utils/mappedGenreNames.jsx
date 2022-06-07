export const mappedGenreNames = (genres) =>
  genres.map(({ name }) => name).join(", ");
