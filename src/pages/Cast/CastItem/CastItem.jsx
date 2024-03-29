import PropTypes from "prop-types";
import noPhoto from "../CastItem/No-photo-m.png";
import { URL_POSTER } from '../../../constants/index'
import { Wrapper, Photo, NoPhoto, Title, Subtitle } from "./CastItem.styled";

export default function CastItem({ name, character, photo }) {
  return (
    <Wrapper>
      {photo ? (
        <Photo src={`${URL_POSTER}w185${photo}`} alt={name} />
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