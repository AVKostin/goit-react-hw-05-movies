import { IMAGE_PATH_POSTER, NO_IMAGE } from '../constants';

export const checkPoster = poster_path => {
  return poster_path
    ? (poster_path = IMAGE_PATH_POSTER + poster_path)
    : (poster_path = NO_IMAGE);
};
