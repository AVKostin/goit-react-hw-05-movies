import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { Wrapper, Item } from "./MoviesGallery.module";
import MovieCard from "./MovieCard";


export default function MoviesGallery ({ list }){
  const location = useLocation();

  const renderGallery = () =>
    list.map((item) => (
      <Item key={item.id}>
        <Link to={`/movies/${item.id}`} state={{ from: location }}>
          <MovieCard {...item} />
        </Link>
      </Item>
    ));

  return <Wrapper>{list.length ? renderGallery() : null}</Wrapper>;
};

MoviesGallery.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
      genres: PropTypes.string,
      release_date: PropTypes.number.isRequired,
      vote_average: PropTypes.number.isRequired,
    })
  ),
};

