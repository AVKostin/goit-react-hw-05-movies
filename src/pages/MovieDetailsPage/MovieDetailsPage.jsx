import { useState, useEffect } from "react";
import { Routes, Route, Outlet, useParams } from "react-router-dom";
import Cast from "../Cast";
import Reviews from "../Reviews";
import Trailers from "../Trailer";
import Section from "../../UI/section";
import Container from "../../UI/container";
import MovieDetails from "../MovieDetails/MovieDetails";
import { movieDetails } from "../../utils/movieDetails";
import { fetchFilmDetails } from "../../Services/movieApi";
import { Loading } from "notiflix/build/notiflix-loading-aio";
import NavigateBackButton from "../../components/NavigateBackButton";
import MovieDetailsNavigation from "../../components/MovieDetailsNavigation";

const MovieDetailsPage = () => {
    const { movieID } = useParams();
    const [movieData, setMovieData] = useState(null);

    useEffect(() => {
        Loading.arrows("Loading...", {
            backgroundColor: "rgba(0,0,0,0.8)",
            svgSize: "120px",
            svgColor: "#00FF00",
            messageFontSize: "26px",
            messageColor: "#00FF00",
        });

        fetchFilmDetails(movieID).then((data) => {
            setMovieData(movieDetails(data));
        });
        Loading.remove();
    }, [movieID]);

    return (
        <>
            <Section>
                <Container>
                    <NavigateBackButton />
                    {movieData && <MovieDetails {...movieData} />}
                </Container>

                <Container>
                    <MovieDetailsNavigation id={movieID} />

                    <Routes>
                        <Route path="/" element={<Outlet />}>
                            <Route
                                path="credits"
                                element={<Cast id={movieID} />}
                            />
                            <Route
                                path="reviews"
                                element={<Reviews id={movieID} />}
                            />
                            <Route
                                path="trailer"
                                element={<Trailers id={movieID} />}
                            />
                        </Route>
                    </Routes>
                </Container>
            </Section>
        </>
    );
};

export default MovieDetailsPage;
