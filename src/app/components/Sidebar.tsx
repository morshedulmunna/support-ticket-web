"use client";

import { Url } from "@/utils/basic";
import getSingleUser from "@/utils/getSingleUser";
import Tostify from "@/utils/Tostify";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Sidebar = () => {
  const [user, setUser] = useState<any>({});

  useEffect(() => {
    getSingleUser(setUser);
  }, []);

  return (
    <>
      <Tostify>
        <div className="mt-12 rounded bg-blue-50 px-3 py-6">
          <Link
            className="block w-full rounded-md py-2 px-4 hover:bg-blue-100"
            href={"/support-center"}
          >
            {user?.foundUser?.roll === "admin" ? "Dashboard" : "Ticket History"}
          </Link>
          <Link
            className="block w-full rounded-md py-2 px-4 hover:bg-blue-100"
            href={"/support-center/open-tickets"}
          >
            Open Tickets
          </Link>
          <Link
            className="block w-full rounded-md py-2 px-4 hover:bg-blue-100"
            href={"/support-center/close-tickets"}
          >
            Close Tickets
          </Link>

          {user?.foundUser?.roll === "admin" && (
            <Link
              className="block w-full rounded-md py-2 px-4 hover:bg-blue-100"
              href={"/support-center/customer"}
            >
              Customers
            </Link>
          )}

          <Link
            className="block w-full rounded-md py-2 px-4 hover:bg-blue-100"
            href={"/support-center/settings"}
          >
            Settings
          </Link>

          <Link href={"/support-center/create-ticket"}>
            <button className=" mt-6 w-full rounded-md bg-blue-500 py-2  text-white hover:bg-blue-400 ">
              Create an Ticket
            </button>
          </Link>
        </div>
      </Tostify>
    </>
  );
};

export default Sidebar;
