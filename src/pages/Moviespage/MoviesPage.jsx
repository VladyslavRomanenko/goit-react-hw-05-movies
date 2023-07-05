import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { getMoviesByName } from 'service/api';
import css from './MoviesPage.module.css';

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
    setSearchParams({ name: searchValue });
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
          {movies.map(movie => (
            <li key={movie.id}>
              <Link className={css.link} to={`${movie.id}`}>
                {movie.name || movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default MoviesPage;

// const App = () => {
//   const [user, setUser] = useState(null);
//   const [searchParams, setSearchParams] = useSearchParams();
//   const username = searchParams.get('username');

//   useEffect(() => {
//     // Тут виконуємо асинхронну операцію,
//     // наприклад HTTP-запит за інформацією про користувача
//     if (username === '') return;

//     async function fetchUser() {
//       const user = await FakeAPI.getUser(username);
//       setUser(user);
//     }

//     fetchUser();
//   }, [username]);

//   const handleSubmit = e => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     setSearchParams({ username: form.elements.username.value });
//     form.reset();
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="username" />
//         <button type="submit">Search</button>
//       </form>
//       {user && <UserInfo user={user} />}
//     </>
//   );
// };
