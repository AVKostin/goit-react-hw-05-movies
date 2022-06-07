import PropTypes from "prop-types";
import {Wrapper, Photo, NoPhoto, Title, Subtitle} from "./CastItem.module";
import noPhoto from "../CastItem/No-photo-m.png";

export default function CastItem({ name, character, photo }) {
  return (
    <Wrapper>
      {photo ? (
        <Photo src={`https://themoviedb.org/t/p/w185${photo}`} alt={name} />
      ) : (
        <NoPhoto src={noPhoto} alt={name} />
      )}

      <Title>{name}</Title>
      <Subtitle>{character}</Subtitle>
    </Wrapper>
  );
};

CastItem.propTypes = {
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  photo: PropTypes.string,
};