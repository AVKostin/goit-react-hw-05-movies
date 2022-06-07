import PropTypes from "prop-types";
import { Wrapper, Thumb, Picture, Title, Genres } from "./MovieCard.module";
import NoPoster from "../../Cast/CastItem/No-photo-m.png";
import { CardsDescription } from '../../MovieDetails/MovieDetails.styled'

const MovieCard = ({ title, posterPath, genres }) => (
  <Wrapper>
    <Thumb>
      {posterPath !== null ? (
        <picture>
          <source
            srcSet={`https://themoviedb.org/t/p/w500${posterPath}`}
            media="(min-width: 1024px)"
          />
          <source
            srcSet={`https://themoviedb.org/t/p/w342${posterPath}`}
            media="(min-width: 768px)"
          />
          <Picture
            alt={title}
            loading="lazy"
            src={`https://themoviedb.org/t/p/w342${posterPath}`}
          />
        </picture>
      ) : (
        <Picture alt={title} loading="lazy" src={NoPoster} />
      )}
    </Thumb>
      <CardsDescription>
        <Title>{title}</Title>
        <Genres>{genres}</Genres>
      </CardsDescription>
    </Wrapper>
);

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  posterPath: PropTypes.string,
  genres: PropTypes.string,
};

export default MovieCard;
