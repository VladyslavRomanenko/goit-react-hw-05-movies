import React from 'react';
import { Header } from 'components/Header/Header';
import styled from 'styled-components';
// import css from './Layout.css';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
