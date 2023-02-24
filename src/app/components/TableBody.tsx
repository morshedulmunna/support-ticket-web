import Link from "next/link";
import React from "react";

const TableBody = () => {
  return (
    <tr>
      <td>Cy Ganderton</td>
      <td>Quality Control Specialist</td>
      <td>21-03-2023</td>
      <td>Canada</td>
      <td>12/16/2020</td>
      <td className="">
        <Link href={"/dashboard/ticket/2"}>
          <button className="btn-xs btn rounded-sm border-none bg-blue-300 bg-opacity-50 font-normal capitalize text-black hover:bg-blue-400">
            view
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default TableBody;
