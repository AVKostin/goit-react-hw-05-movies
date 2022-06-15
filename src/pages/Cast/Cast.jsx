import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Loading } from "notiflix/build/notiflix-loading-aio";
import CastItem from "./CastItem";
import { fetchCast } from "../../Services/movieApi";
import { mappedCast } from "../../utils/mappedCast";
import noCredits from "./no-image-available.png";
import { List, Item } from './Cast.styled'

export default function MovieCast({ id }) {
  const [cast, setCast] = useState([]);
  Loading.arrows("Loading...", {
      backgroundColor: "rgba(0,0,0,0.8)",
      svgSize: "120px",
      svgColor: "#00FF00",
      messageFontSize: "26px",
      messageColor: "#00FF00",
  });

  useEffect(() => {
    fetchCast(id).then((data) => {
      setCast(mappedCast(data.cast));
    });
  }, [id]);

  Loading.remove();

  return (
    <List>
      {cast.length > 0 ? (
        cast.map((item) => (
          <Item key={item.id}>
            <CastItem {...item} />
          </Item>
        ))
      ) : (
        <div className="noCredits">
          <img width="180px" src={noCredits} alt="no credits" />
          <p>Sorry no credits available</p>
        </div>
      )}
    </List>
  );
};

MovieCast.propTypes = {
  id: PropTypes.string.isRequired,
};