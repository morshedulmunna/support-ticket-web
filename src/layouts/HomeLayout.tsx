import React from "react";
import Footer from "~/components/shared/Footer/Footer";
import Navbar from "~/components/shared/Navbar/Navbar";

type Props = {
  children: React.ReactNode;
};

const HomeLayout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default HomeLayout;
