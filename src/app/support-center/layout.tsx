'use client';

import Loading from '@/components/Loading';
import Sidebar from '@/components/Sidebar';
import { useCheckAuth } from '@/hooks/useAuthCheck';
import { login } from '@/redux/features/auth/authSlice';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const authCheck = useCheckAuth();

  if (!authCheck) {
    return <Loading />;
  }

  return (
    <>
      <section className="containers  grid grid-cols-12">
        <aside className="col-span-12  md:col-span-3">
          <Sidebar />
        </aside>
        <main className="col-span-12 md:col-span-9 h-screen md:mt-12  ml-6">
          {children}
        </main>
      </section>
    </>
  );
};

export default Layout;
