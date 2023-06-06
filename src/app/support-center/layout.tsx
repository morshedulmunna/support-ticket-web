import Sidebar from '@/components/Sidebar';
import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
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
