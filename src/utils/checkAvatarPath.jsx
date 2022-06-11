import { IMAGE_PATH_PROFILE, NO_IMAGE } from '../constants';

export const checkAvatarPath = avatar => {
  if (!avatar) return (avatar = NO_IMAGE);
  if (avatar.includes(`https`)) return (avatar = avatar.slice(1));
  return (avatar = IMAGE_PATH_PROFILE + avatar);
};
