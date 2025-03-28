import React from 'react';
import { Outlet } from 'react-router';

import { Header, Footer } from './components/index';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
