import { formattedDate } from "@/utils/formatedDate";
import Link from "next/link";
import React from "react";
import { CgCloseR } from "react-icons/cg";

type Props = {
  item: any;
};

const TableBody = ({ item }: Props) => {
  const { tiket_id, title, status, subject, updatedDate } = item;

  const date = formattedDate(updatedDate);

  return (
    <tr>
      <td>{tiket_id}</td>
      <td>{title}</td>
      <td>{date}</td>
      <td>{subject}</td>
      <td className="text-indigo-400"> {status} </td>
      <td>
        <Link href={`/support-center/ticket/${tiket_id}`}>
          <button className="btn-xs btn rounded-sm border-none bg-blue-300 bg-opacity-50 font-normal capitalize text-black hover:bg-blue-400">
            view
          </button>
        </Link>
      </td>
      <td>
        <button className=" cursor-pointer  text-red-500">
          <CgCloseR size={20} />
        </button>
      </td>
    </tr>
  );
};

export default TableBody;
