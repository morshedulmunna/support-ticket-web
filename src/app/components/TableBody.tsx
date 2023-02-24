import Link from "next/link";
import React from "react";

const TableBody = () => {
  return (
    <tr>
      <td>Cy Ganderton</td>
      <td>Need helps for payment system</td>
      <td>21-03-2023</td>
      <td>Support/Internet</td>
      <td className="text-indigo-400">Open</td>
      <td className="">
        <Link href={"/support-center/ticket/2"}>
          <button className="btn-xs btn rounded-sm border-none bg-blue-300 bg-opacity-50 font-normal capitalize text-black hover:bg-blue-400">
            view
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default TableBody;
