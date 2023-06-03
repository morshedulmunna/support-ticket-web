import React, { type FC } from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <React.Fragment>
      <main>{children}</main>
    </React.Fragment>
  );
};
export default Layout;
