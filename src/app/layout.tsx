import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import StoreProvider from "@/redux/StoreProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <StoreProvider>
        <body>
          <Navbar />
          <main className="">{children}</main>
          <Footer />
          <ToastContainer />
        </body>
      </StoreProvider>
    </html>
  );
}
