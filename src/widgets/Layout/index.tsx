import { Fragment, ReactNode } from 'react';
import GlobalNavigationBar from './GlobalNavigationBar';
import Footer from './Footer';

type LayoutProps = {
  children: ReactNode;
  isLogined: boolean;
};
const Layout = ({ children, isLogined }: LayoutProps) => {
  return (
    <>
      <GlobalNavigationBar afterLogin={isLogined} />
      <Fragment>{children}</Fragment>
      <Footer />
    </>
  );
};

export default Layout;
