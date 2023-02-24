import Link from "next/link";
import React from "react";
import TableBody from "./TableBody";

const TableHeader = () => {
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table-compact table w-full">
          <thead>
            <tr>
              <th>Ticket ID</th>
              <th>Title</th>
              <th>Date</th>
              <th>Subject</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
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
