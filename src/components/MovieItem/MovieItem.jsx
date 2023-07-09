import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import css from './MovieItem.module.css';
import PropTypes from 'prop-types';

const MovieItem = ({ movie }) => {
  const location = useLocation();
  return (
    <li key={movie.id}>
      <Link className={css.link} to={`/movies/${movie.id}`} state={location}>
        {movie.name || movie.title}
      </Link>
    </li>
  );
};

export default MovieItem;

MovieItem.propTypes = {
  movie: PropTypes.shape({
    name: PropTypes.string,
    title: PropTypes.string,
    id: PropTypes.number,
  }),
};
