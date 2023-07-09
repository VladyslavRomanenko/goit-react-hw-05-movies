import Layout from 'components/Layout/Layout';
// import HomePage from 'pages/Homepage/HomePage';
import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

const HomePage = lazy(() => import('pages/Homepage/HomePage'));
const MoviesPage = lazy(() => import('pages/Moviespage/MoviesPage'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to={'/'} />} />
        </Route>
      </Routes>
    </>
  );
};
