'use client';
import { store } from '@/redux/store';
import React, { type FC } from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface GlobalLayoutProps {
  children: React.ReactNode;
}

const GlobalLayout: FC<GlobalLayoutProps> = ({ children }) => {
  return (
    <React.Fragment>
      <Provider store={store}>
        <main>
          {children}
          <ToastContainer />
        </main>
      </Provider>
    </React.Fragment>
  );
};
export default GlobalLayout;
