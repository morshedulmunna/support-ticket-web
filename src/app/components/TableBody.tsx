import { formattedDate } from "@/utils/formatedDate";
import Link from "next/link";
import React from "react";

type Props = {
  item: any;
};

const TableBody = ({ item }: Props) => {
  const { tiket_id, title, status, subject, updatedDate } = item;

  const date = formattedDate(updatedDate);

  return (
    <>
      <tr>
        <td>{tiket_id}</td>
        <td>{title}</td>
        <td>{date}</td>
        <td>{subject}</td>
        <td className="text-indigo-400"> {status} </td>
        <td className="">
          <button className="btn-xs btn rounded-sm border-none bg-blue-300 bg-opacity-50 font-normal capitalize text-black hover:bg-blue-400">
            <Link href={`/support-center/ticket/${tiket_id}`}>view</Link>
          </button>
        </td>
      </tr>
    </>
  );
};

export default TableBody;
