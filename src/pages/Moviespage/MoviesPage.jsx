import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesByName } from 'service/api';
import css from './MoviesPage.module.css';
import MovieList from 'components/MovieList/MovieList';

const MoviesPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get('name') ?? '';

  useEffect(() => {
    if (name === '') return;
    getMoviesByName(name).then(movies => setMovies(movies));
  }, [name]);

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams(searchValue ? { name: searchValue } : {});
    setSearchValue('');
  };

  const handleChange = event => {
    setSearchValue(event.target.value);
  };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          name={name}
          value={searchValue}
          onChange={handleChange}
        />
        <button className={css.button} type="submit">
          Search
        </button>
      </form>
      {!!movies.length && (
        <ul>
          <MovieList movies={movies} />
        </ul>
      )}
    </>
  );
};

export default MoviesPage;
