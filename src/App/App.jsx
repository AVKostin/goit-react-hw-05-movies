import { lazy, Suspense, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import { Loading } from "notiflix/build/notiflix-loading-aio";
import { fetchGenres } from "../Services/movieApi";

const HomePage = lazy(() =>
  import("../pages/HomePage" /* webpackChunkName: "home-view" */)
);
const MoviesPage = lazy(() =>
  import("../pages/MoviesPage" /* webpackChunkName: "movies-view" */)
);
const MovieDetailsPage = lazy(() =>
  import("../pages/MovieDetailsPage" /* webpackChunkName: "movie-details-view" */)
);

export default function App () {
  const [genresList, setGenresList] = useState([]);

  useEffect(() => {
    fetchGenres()
      .then((data) => setGenresList(data.genres));
  }, []);

console.log('genresList: ', genresList);

  return (
    <Suspense
      fallback={ Loading.arrows("Loading...", {
      backgroundColor: "rgba(0,0,0,0.8)",
      svgSize: "120px",
      svgColor: "#00FF00",
      messageFontSize: "26px",
      messageColor: "#00FF00",
    })}
    >
      {Loading.remove()}
      <Routes>
        <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage genresList={genresList} />} />
        <Route path="movies/:movieID/*" element={<MovieDetailsPage />} />
        <Route
          path="movies"
          element={<MoviesPage genresList={genresList} />}
        />
        </Route>
      </Routes>
    </Suspense>
  );
};
