import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Logout from './Auth/Logout';

export default function Template() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <Logout />
    </>
  );
}
