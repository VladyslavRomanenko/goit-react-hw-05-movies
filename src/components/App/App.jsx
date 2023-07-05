import Cast from 'components/Cast/Cast';
import Layout from 'components/Layout/Layout';
import Reviews from 'components/Reviews/Reviews';
import HomePage from 'pages/Homepage/HomePage';
import MoviesPage from 'pages/Moviespage/MoviesPage';
import MovieDetails from 'pages/MovieDetails/MovieDetails';

import { Route, Routes } from 'react-router-dom';

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
          <Route path="*" element={'Page is not found'} />
        </Route>
      </Routes>
    </>
  );
};
