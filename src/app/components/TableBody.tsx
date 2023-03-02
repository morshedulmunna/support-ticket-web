"use client";

import { formattedDate } from "@/utils/formatedDate";
import { getSingleUser } from "@/utils/getUsers";
import { deleteTicket } from "@/utils/ticket";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CgCloseR } from "react-icons/cg";
import { toast } from "react-toastify";

type Props = {
  item: any;
  deleteTicketHandler: any;
};

const TableBody = ({ item, deleteTicketHandler }: Props) => {
  const { tiket_id, title, status, subject, updatedDate } = item;
  const date = formattedDate(updatedDate);

  const [user, setUser] = useState<any>({});
  useEffect(() => {
    getSingleUser(setUser);
  }, []);

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

      {user?.foundUser?.roll === "admin" && (
        <td>
          <button
            onClick={() => deleteTicketHandler(tiket_id)}
            className=" cursor-pointer  text-red-500"
          >
            <CgCloseR size={20} />
          </button>
        </td>
      )}
    </tr>
  );
};

export default TableBody;
