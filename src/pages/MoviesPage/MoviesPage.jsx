import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";
import Section from "../../UI/section";
import Container from "../../UI/container";
import SearchBar from "../../components/SearchBar";
import { fetchSearch } from "../../Services/movieApi";
import { mappedMoviesList } from "../../utils/mappedMoviesList";
import MoviesGallery from "../MoviesGallery/MoviesGallery";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { Loading } from "notiflix/build/notiflix-loading-aio";

const PARAM_QUERY = "query";

    Notify.init({
      position: 'center-top',
      width: '400px',
      fontSize: '18px',
      cssAnimationStyle: "from-left",
    });

export default function MoviePage({ genresList }){
  const [moviesList, setMoviesList] = useState([]);
  const [queryParam, setQueryParam] = useSearchParams({});

  useEffect(() => {
    const query = queryParam.get(PARAM_QUERY);
    if (query) handleSearch(query);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = (query) => {
    setQueryParam({ [PARAM_QUERY]: query });

    Loading.arrows("Loading...", {
      backgroundColor: "rgba(0,0,0,0.8)",
      svgSize: "120px",
      svgColor: "#00FF00",
      messageFontSize: "26px",
      messageColor: "#00FF00",
    });

    fetchSearch(query)
      .then((data) => {
        if (data.results.length === 0) {
          Notify.failure("Sorry nothing found on your query");
        }
          setMoviesList(mappedMoviesList(genresList, data.results));
      })
      .catch((err) => {
        console.error(err);
      });
    Loading.remove();
  };

  return (
    <Section>

      <Container>
        <SearchBar onSearch={handleSearch} />
      </Container>

      <Container>
        <MoviesGallery list={moviesList} />
      </Container>

    </Section>
  );
};

MoviePage.propTypes = {
  genresList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};