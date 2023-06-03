'use client';

import './globals.css';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtoolsPanel } from '@tanstack/react-query-devtools';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
const queryClient = new QueryClient();
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          <Navbar />
          <main className="">{children}</main>
          <Footer />
          <ToastContainer />
          {/* <ReactQueryDevtoolsPanel initialIsOpen={false} /> */}
        </QueryClientProvider>
      </body>
    </html>
  );
}
