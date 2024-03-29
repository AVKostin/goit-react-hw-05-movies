import PropTypes from "prop-types";
import { URL_POSTER } from "../../../constants/index";
import NoPoster from "../../Cast/CastItem/No-photo-m.png";
import { Wrapper, Thumb, Picture, Title, Genres } from "./MovieCard.styled";
import {
    RatingCards,
    RatingAccent,
    CardsDescription,
} from "../../MovieDetails/MovieDetails.styled";

export default function MovieCard({
    title,
    genres,
    poster_path,
    release_date,
    vote_average,
}) {
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
                                src={`${URL_POSTER}w342${poster_path}`}
                                alt={title}
                                loading="lazy"
                            />
                        </picture>
                    ) : (
                        <Picture alt={title} loading="lazy" src={NoPoster} />
                    )}
                </Thumb>
                <CardsDescription>
                    <Title>
                        {title}
                        <span> | </span>
                        {release_date}
                    </Title>
                    <RatingCards>
                        <Genres>{genres}</Genres>
                        <RatingAccent>{vote_average}</RatingAccent>
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
    vote_average: PropTypes.string.isRequired,
};
