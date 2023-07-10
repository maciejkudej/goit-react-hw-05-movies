import { Suspense } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import css from './layout.module.css';

const Layout = () => {
  return (
    <>
      <header className={css.header}>
        <nav>
          <Link className={css.linksMain} to="/">
            Home
          </Link>
          <Link className={css.linksMain} to="/movies">
            Movies
          </Link>
        </nav>
      </header>
      <Suspense>
        <Outlet />
      </Suspense>
      <ToastContainer />
    </>
  );
};
export default Layout;
