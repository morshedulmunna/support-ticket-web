"use client";
import { usePathname } from "next/navigation";
import React from "react";
import TableBody from "./TableBody";

const TableHeader = () => {
  const pathname = usePathname();

  console.log(pathname);

  return (
    <>
      <div
        className={`lg:overflow-x-none mb-[12] ${
          pathname === "/support-center" ? "h-[65vh]" : "h-[85vh]"
        }  overflow-x-auto overflow-y-auto`}
      >
        <table className="table-compact  table w-full">
          <thead className="sticky top-0">
            <tr>
              <th className=" text-sm font-medium capitalize">Ticket ID</th>
              <th className=" text-sm font-medium capitalize">Title</th>
              <th className=" text-sm font-medium capitalize">Date</th>
              <th className=" text-sm font-medium capitalize">Subject</th>
              <th className=" text-sm font-medium capitalize">Status</th>
              <th className=" text-sm font-medium capitalize"></th>
            </tr>
          </thead>
          <tbody>
            <TableBody />
            <TableBody />
            <TableBody />
            <TableBody />
            <TableBody />
            <TableBody />
            <TableBody />
            <TableBody />
            <TableBody />
            <TableBody />
            <TableBody />
            <TableBody />
            <TableBody />
            <TableBody />
            <TableBody />
            <TableBody />
            <TableBody />
            <TableBody />
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableHeader;
