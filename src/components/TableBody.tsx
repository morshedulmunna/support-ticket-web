import Link from "next/link";
import React, { type FC } from "react";
import { MdClose } from "react-icons/md";

interface TableBodyProps {
  each: {
    createDate: string;
    description: string;
    status: string;
    subject: string;
    tiket_id: string;
    title: string;
    updatedDate: string;
    userId: string;
  };
}

const TableBody: FC<TableBodyProps> = ({ each }) => {
  return (
    <React.Fragment>
      <tr className="border-b dark:border-neutral-200">
        <td className="whitespace-nowrap px-6 py-4 font-medium">
          {each.tiket_id.slice(0, 8)}
        </td>
        <td className="whitespace-nowrap px-2 py-4"> {each.subject} </td>
        <td className="whitespace-nowrap px-2 py-4"> {each.status} </td>
        <td className="whitespace-nowrap px-2 py-4">{each.title}</td>
        <td className="whitespace-nowrap py-4 space-x-3 flex items-center">
          <Link
            href={`/support-center/${
              each.status === "open" ? "open-tickets" : "close-tickets"
            }/${each.tiket_id}`}
          >
            <button className="bg-orange-500 h-6 w-12 flex justify-center items-center rounded text-white font-medium hover:bg-orange-400  duration-200 ease-linear">
              view
            </button>
          </Link>
          <button className="bg-red-400 h-5 w-5 flex justify-center items-center rounded text-white font-medium hover:bg-red-600  duration-200 ease-linear">
            <MdClose size={20} />
          </button>
        </td>
      </tr>
    </React.Fragment>
  );
};
export default TableBody;
