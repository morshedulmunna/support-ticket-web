'use client';
import { store } from '@/redux/store';
import React, { type FC } from 'react';
import { Provider } from 'react-redux';

interface GlobalLayoutProps {
  children: React.ReactNode;
}

const GlobalLayout: FC<GlobalLayoutProps> = ({ children }) => {
  return (
    <React.Fragment>
      <Provider store={store}>
        <main>{children}</main>
      </Provider>
    </React.Fragment>
  );
};
export default GlobalLayout;
