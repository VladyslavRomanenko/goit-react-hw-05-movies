import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'service/api';
import noPhoto from '../../img/nophoto.png';
import css from './Cast.module.css';
const Cast = () => {
  const { movieId } = useParams();
  const [casts, setCast] = useState([]);

  useEffect(() => {
    getCast(movieId).then(cast => {
      setCast(cast);
    });
  }, [movieId]);

  if (casts.length === 0) {
    return null;
  }

  const { cast } = casts;

  return (
    <div className={css.casts}>
      <ul className={css.list}>
        {cast.length ? (
          cast.map(cast => (
            <li key={cast.id} className={css.item}>
              <img
                src={
                  cast.profile_path
                    ? `https://image.tmdb.org/t/p/original/${cast.profile_path}`
                    : noPhoto
                }
                alt=""
                width={'230px'}
                height={'320px'}
              />
              <h4>{cast.name}</h4>
              <p className={css.character}>Character: {cast.character}</p>
            </li>
          ))
        ) : (
          <p> We don't have any casts for this movie. </p>
        )}
      </ul>
    </div>
  );
};

export default Cast;
