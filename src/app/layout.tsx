'use client';

import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GlobalLayout from '@/layouts/GlobalLayout';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <GlobalLayout>
          <Navbar />
          <main className="">{children}</main>
          <Footer />
        </GlobalLayout>
      </body>
    </html>
  );
}
