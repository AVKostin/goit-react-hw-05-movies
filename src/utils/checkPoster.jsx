import { IMAGE_POSTER_500, NO_IMAGE } from '../constants';

export const checkPoster = poster_path => {
  return poster_path
    ? (poster_path = IMAGE_POSTER_500 + poster_path)
    : (poster_path = NO_IMAGE);
};