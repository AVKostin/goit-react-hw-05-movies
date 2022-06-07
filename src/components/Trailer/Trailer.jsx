import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { List } from "./Trailer.module";
import { Loading } from "notiflix/build/notiflix-loading-aio";
import { fetchFilmVideo } from "Services/movieApi";
import Iframe from "react-iframe";
import noTrailer from "components/Trailer/no-trailer.png";

export default function Trailers({ id }) {
  const [trailers, setTrailers] = useState([]);

  Loading.arrows("Loading...", {
      backgroundColor: "rgba(0,0,0,0.8)",
      svgSize: "120px",
      svgColor: "#00FF00",
      messageFontSize: "26px",
      messageColor: "#00FF00",
    });

  useEffect(() => {
    fetchFilmVideo(id).then((data) => setTrailers(data.results));
  }, [id]);

  Loading.remove();

  return (
    <List>
      {trailers.length > 0 ? (
        trailers.map((item) => (
          <li key={item.id}>
            <Iframe
              url={`https://www.youtube.com/embed/${item.key}`}
              width="100%"
              height="250px"
              allowFullScreen
            />
          </li>
        ))
      ) : (
        <img width="300px" src={noTrailer} alt="no trailer" />
      )}
    </List>
  );
};

Trailers.propTypes = {
  id: PropTypes.string.isRequired,
};
