import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { fetchTrends } from "../../Services/movieApi";
import { mappedMoviesList } from "../../utils/mappedMoviesList";
import Section from "../../UI/section";
import Container from "../../UI/container";
import MoviesGallery from "../MoviesGallery/MoviesGallery";

export default function HomePage({ genresList }) {
    const [moviesList, setMoviesList] = useState([]);

    useEffect(() => {
        if (genresList.length)
            fetchTrends().then((data) => {
                setMoviesList(mappedMoviesList(genresList, data.results));
            });
    }, [genresList]);

    return (
        <>
            <Section>
                <Container>
                    <MoviesGallery list={moviesList} />
                </Container>
            </Section>
        </>
    );
}

HomePage.propTypes = {
    genresList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
        }),
    ).isRequired,
};
