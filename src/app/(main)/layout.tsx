'use client';

import Loading from '@/components/Loading';
import { useCheckAuth } from '@/hooks/useAuthCheck';
import { login } from '@/redux/features/auth/authSlice';
import React, { useEffect, type FC, useState } from 'react';
import { useDispatch } from 'react-redux';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const authCheck = useCheckAuth();

  if (!authCheck) {
    return <Loading />;
  }

  return (
    <React.Fragment>
      <main>{children}</main>
    </React.Fragment>
  );
};
export default Layout;
