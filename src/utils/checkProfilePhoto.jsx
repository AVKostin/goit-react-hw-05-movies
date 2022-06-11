import { IMAGE_PATH_PROFILE, NO_IMAGE } from '../constants';

export const checkProfilePhoto = poster_path => {
  return poster_path
    ? (poster_path = IMAGE_PATH_PROFILE + poster_path)
    : (poster_path = NO_IMAGE);
};
