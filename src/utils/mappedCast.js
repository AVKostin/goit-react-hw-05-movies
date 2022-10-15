export const mappedCast = (list) =>
    list.map((item) => ({
        id: item.id,
        name: item.name,
        photo: item.profile_path,
        character: item.character,
    }));
