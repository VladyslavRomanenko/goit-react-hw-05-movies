import React, { useEffect, useState } from 'react';
import { Link, useParams, Outlet } from 'react-router-dom';
import { getMovieDetails } from 'service/api';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState();

  useEffect(() => {
    getMovieDetails(movieId).then(movie => setMovie(movie));
  }, [movieId]);
  if (!movie) {
    return null;
  }
  return (
    <>
      <div>
        <Link to={'/'} className={css.back}>
          GO BACK
        </Link>
        <div className={css.details}>
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            width={'300px'}
            height={'300px'}
            alt={movie.original_title}
          />
          <div className={css.description}>
            <h1>{movie.original_title}</h1>
            <p className={css.score}>
              User score: {Math.ceil(movie.vote_average * 10)}%
            </p>
            <h2>Overview</h2>
            <p className={css.overview}>{movie.overview}</p>
            <h2>Genres</h2>
            <ul className={css.list}>
              {movie.genres.map(genr => (
                <li key={genr.id} className={css.genr}>
                  {genr.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className={css.movieDetails}>
        <h2 className={css.title}>Additional information</h2>
        <ul className={css.list}>
          <li>
            <Link to={'cast'} className={css.link}>
              Cast
            </Link>
          </li>
          <li>
            <Link to={'reviews'} className={css.link}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default MovieDetails;
