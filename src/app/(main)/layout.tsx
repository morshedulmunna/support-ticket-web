import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React, { type FC } from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  );
};
export default Layout;
