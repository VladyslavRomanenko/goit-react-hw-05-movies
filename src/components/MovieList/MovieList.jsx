import MovieItem from 'components/MovieItem/MovieItem';
import React from 'react';

const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => (
        <MovieItem movie={movie} key={movie.id} />
      ))}
    </ul>
  );
};

export default MovieList;
