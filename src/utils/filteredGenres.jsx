export const filteredGenres = (genresList, IDs) => {
  if (genresList.length && IDs) {
    const str = IDs.map((ID) => genresList.find((genre) => genre.id === ID))
      .map((item) => item?.name)
      .join(", ");

    if (str) return str;
  }

  return "";
};
