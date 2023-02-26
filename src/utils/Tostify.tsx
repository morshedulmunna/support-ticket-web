import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {
  children: React.ReactNode;
};

const Tostify = (props: Props) => {
  return (
    <>
      {props.children}
      <ToastContainer />
    </>
  );
};

export default Tostify;
