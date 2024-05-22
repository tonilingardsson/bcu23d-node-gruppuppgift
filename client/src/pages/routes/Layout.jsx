import { Outlet } from 'react-router';
import { Header } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';




export const Layout = () => {
  return ( 
    <>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};