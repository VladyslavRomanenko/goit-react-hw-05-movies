import React, { Suspense, lazy } from 'react';
import Header from 'components/Header/Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<h1>Loading</h1>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
