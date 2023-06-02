'use client';

import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import Footer from '../components/Footer';
const queryClient = new QueryClient();
import Header from '../components/Header';
import '../globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <QueryClientProvider client={queryClient}>
          <main>{children}</main>
          <Footer />
        </QueryClientProvider>
      </body>
    </html>
  );
}
