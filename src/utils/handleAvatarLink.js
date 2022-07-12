import { URL_POSTER } from '../constants/index'

export const handleAvatarLink = (link) => {
    if (!link) return "";
    if (link.includes("http")) return link.substring(1);
  return `${URL_POSTER}w45${link}`;
};