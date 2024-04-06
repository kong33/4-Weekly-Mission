import { Fragment, ReactNode } from 'react';
import Header from '@/app/ui/Header';
import Footer from '@/app/ui/Footer';

type LayoutProps = {
  children: ReactNode;
  isLogined: boolean;
};
const Layout = ({ children, isLogined }: LayoutProps) => {
  return (
    <>
      <Header isLoggedIn={isLogined} />
      <Fragment>{children}</Fragment>
      <Footer />
    </>
  );
};

export default Layout;
