import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

export const Header = () => {
  return (
    <header className={css.header}>
      <nav className={css.navigation}>
        <NavLink className={css.link} to={'/'}>
          Home
        </NavLink>
        <NavLink className={css.link} to={'/movies'}>
          Movies
        </NavLink>
      </nav>
    </header>
  );
};
