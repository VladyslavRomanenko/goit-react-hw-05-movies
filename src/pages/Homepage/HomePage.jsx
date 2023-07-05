import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTrendingData } from 'service/api';
import css from './HomePage.module.css';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingData().then(res => setMovies(res));
  }, []);

  return (
    <div>
      <h1 className={css.title}>Trending today</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link className={css.link} to={`movies/${movie.id}`}>
              {movie.name || movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
