import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRewies } from 'service/api';
import css from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [review, setReview] = useState();
  useEffect(() => {
    getRewies(movieId).then(review => {
      setReview(review);
    });
  }, [movieId]);

  if (!review) {
    return null;
  }

  const { results } = review;

  console.log(results);
  return (
    <div className={css.reviews}>
      <ul className={css.list}>
        {results.length ? (
          results.map(review => (
            <li key={review.id} className={css.item}>
              <h2 className={css.author}>Author: {review.author}</h2>
              <p className={css.review}>{review.content}</p>
            </li>
          ))
        ) : (
          <p className={css.noReview}>
            We don't have any reviews for this movie.
          </p>
        )}
      </ul>
    </div>
  );
};

export default Reviews;
