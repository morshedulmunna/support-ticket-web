import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
          <main className="">{children}</main>
          <ToastContainer />
        </GlobalLayout>
      </body>
    </html>
  );
}
