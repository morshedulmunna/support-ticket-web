"use client";
import { store } from "@/redux/store";
import React, { type FC } from "react";
import { Provider } from "react-redux";

interface GlobalLayoutProps {
  children: React.ReactNode;
}

const StoreProvider: FC<GlobalLayoutProps> = ({ children }) => {
  return (
    <React.Fragment>
      <Provider store={store}>{children}</Provider>
    </React.Fragment>
  );
};
export default StoreProvider;
