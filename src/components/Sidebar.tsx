"use client";

import Link from "next/link";
import { useState } from "react";

const Sidebar = () => {
  const [user, setUser] = useState<any>({});

  return (
    <>
      <div className="mt-12 rounded bg-orange-50 px-3 py-6">
        <Link
          className="block w-full rounded-md py-2 px-4 hover:bg-orange-100"
          href={"/support-center"}
        >
          {user?.foundUser?.roll === "admin" ? "Dashboard" : "Ticket History"}
        </Link>
        <Link
          className="block w-full rounded-md py-2 px-4 hover:bg-orange-100"
          href={"/support-center/open-tickets"}
        >
          Open Tickets
        </Link>
        <Link
          className="block w-full rounded-md py-2 px-4 hover:bg-orange-100"
          href={"/support-center/close-tickets"}
        >
          Close Tickets
        </Link>

        {user?.foundUser?.roll === "admin" && (
          <Link
            className="block w-full rounded-md py-2 px-4 hover:bg-orange-100"
            href={"/support-center/customer"}
          >
            Customers
          </Link>
        )}

        <Link
          className="block w-full rounded-md py-2 px-4 hover:bg-orange-100"
          href={"/support-center/settings"}
        >
          Settings
        </Link>

        {user?.foundUser?.roll !== "admin" && (
          <Link href={"/support-center/create-ticket"}>
            <button className=" mt-6 w-full rounded-md bg-orange-500 py-2  text-white hover:bg-orange-400 ">
              Create an Ticket
            </button>
          </Link>
        )}
      </div>
    </>
  );
};

export default Sidebar;
