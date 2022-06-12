import { IMAGE_POSTER_185, NO_IMAGE } from '../constants';

export const checkProfilePhoto = poster_path => {
  return poster_path
    ? (poster_path = IMAGE_POSTER_185 + poster_path)
    : (poster_path = NO_IMAGE);
};
