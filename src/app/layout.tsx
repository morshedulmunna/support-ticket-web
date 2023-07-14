"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import GlobalLayout from "@/layouts/GlobalLayout";
import "./globals.css";

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
