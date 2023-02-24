import Sidebar from "@/app/components/Sidebar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="containers grid grid-cols-12">
        <aside className="col-span-12 md:col-span-3">
          <Sidebar />
        </aside>

        <main className="col-span-12 md:col-span-9">{children}</main>
      </div>
    </>
  );
};

export default layout;
