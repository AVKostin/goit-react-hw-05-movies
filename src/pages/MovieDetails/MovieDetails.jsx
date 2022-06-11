import PropTypes from "prop-types";
import { Outlet } from 'react-router-dom';
import { URL_POSTER } from '../../constants'
import noPoster from "../Cast/";
import { Wrapper, Thumb, Information, Title, Details, Table, Head, Data, Rating, RatingAccent, AboutSubtitle, Overview } from "./MovieDetails.styled";

export const MovieDetails = ({ title, genres, overview, vote_count, popularity, poster_path, vote_average, release_date, backdrop_path, original_title
}) => {

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
            <img
              alt={title}
              loading="lazy"
              src={`${URL_POSTER}w342${backdrop_path}`}
            />
          </picture>
        ) : (
          <img src={noPoster} alt="no poster" loading="lazy" />
        )}
      </Thumb>

        <Details>
          <Title>{title}</Title>
          <Information>
          <Table>
            <tbody>
              <tr>
                <Head>Vote / Votes:</Head>
                <Data>
                  <Rating>{vote_average}</Rating> /{' '}
                  <RatingAccent>{vote_count}</RatingAccent>
                </Data>
              </tr>
              <tr>
                <Head>Popularity:</Head>
                <Data>{popularity}</Data>
              </tr>
              <tr>
                <Head>Original title</Head>
                <Data>{original_title}</Data>
              </tr>
              <tr>
                <Head>Release date:</Head>
                <Data>{release_date}</Data>
              </tr>
              <tr>
                <Head>Genre:</Head>
                <Data>
                {genres ? genres : 'No genres'}
                </Data>
              </tr>
            </tbody>
        </Table>
        </Information>
          <AboutSubtitle>About</AboutSubtitle>
          <Overview>{overview}</Overview>
        </Details>
      </Wrapper>
      <Outlet />
  </>
  );
};

MovieDetails.propTypes = {
  title: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  release_date: PropTypes.number,
  overview: PropTypes.string,
  genres: PropTypes.string,
  poster_path: PropTypes.string,
};