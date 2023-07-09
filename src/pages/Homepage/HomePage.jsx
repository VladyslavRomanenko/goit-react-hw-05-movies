import React, { useEffect, useState } from 'react';
import { getTrendingData } from 'service/api';
import css from './HomePage.module.css';
import MovieList from 'components/MovieList/MovieList';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingData().then(res => setMovies(res));
  }, []);

  return (
    <div>
      <h1 className={css.title}>Trending today</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
