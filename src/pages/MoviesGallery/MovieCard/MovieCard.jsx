import PropTypes from "prop-types";
import { Wrapper, Thumb, Picture, Title, Genres } from "./MovieCard.styled";
import { URL_POSTER } from '../../../constants'
import NoPoster from "../../Cast/CastItem/No-photo-m.png";
import { CardsDescription, RatingAccent, RatingCards } from '../../MovieDetails/MovieDetails.styled'

export const MovieCard = ({ title,  release_date, poster_path, genres, vote_average }) => {
  return (
    <>
      <Wrapper>
        <Thumb>
          {poster_path !== null ? (
            <picture>
              <source
                srcSet={`${URL_POSTER}w500${poster_path}`}
                media="(min-width: 1024px)"
              />
              <source
                srcSet={`${URL_POSTER}w342${poster_path}`}
                media="(min-width: 768px)"
              />
              <Picture
                alt={title}
                loading="lazy"
                src={`${URL_POSTER}w342${poster_path}`}
              />
            </picture>
          ) : (
            <Picture alt={title} loading="lazy" src={NoPoster} />
          )}
        </Thumb>
          <CardsDescription>
            <Title>{title}<span> | </span>{2022}</Title>
            <RatingCards>
              <Genres>{genres}</Genres>
                <RatingAccent>{5.2}</RatingAccent>
                </RatingCards>
          </CardsDescription>
      </Wrapper>
    </>
  );
}

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string,
  genres: PropTypes.string,
  release_date: PropTypes.number.isRequired,
  vote_average: PropTypes.number.isRequired,
};

export default MovieCard;