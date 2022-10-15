import { handleAvatarLink } from "./handleAvatarLink";

export const mappedReviews = (list) =>
    list.map((item) => ({
        id: item.id,
        name: item.author,
        text: item.content,
        avatar: handleAvatarLink(item.author_details.avatar_path),
    }));
