import PropTypes from "prop-types";
import MovieCard from "../MoviesGallery/MovieCard/";
import { Link, useLocation } from "react-router-dom";
import { Wrapper, Item } from "./MoviesGallery.styled";

export default function MoviesGallery({ list }) {
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
}

MoviesGallery.propTypes = {
    list: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            posterPath: PropTypes.string,
            genres: PropTypes.string,
        }),
    ),
};
