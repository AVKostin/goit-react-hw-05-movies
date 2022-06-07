export const mappedCast = (list) =>
  list.map((item) => ({
    id: item.id,
    name: item.name,
    character: item.character,
    photo: item.profile_path,
  }));
