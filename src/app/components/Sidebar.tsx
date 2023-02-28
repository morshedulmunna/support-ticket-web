"use client";

import { Url } from "@/utils/basic";
import Tostify from "@/utils/Tostify";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";

const Sidebar = () => {
  const router = useRouter();

  function handleLogout() {
    axios
      .get(`${Url}/auth/signout`)
      .then((res) => {
        setTimeout(() => {
          router.push("/login");
          toast.warning("Signout Successful");
        }, 0);
      })
      .catch((error) => {
        console.error("Error logging out:", error);
      });
  }

  return (
    <>
      <Tostify>
        <div className="mt-12 rounded bg-blue-50 px-3 py-6">
          {data.map((item, index) => (
            <Link
              key={index}
              className="block w-full rounded-md py-2 px-4 hover:bg-blue-100"
              href={item.href}
            >
              {item.label}
            </Link>
          ))}

          <span
            className="block w-full cursor-pointer rounded-md py-2 px-4 hover:bg-blue-100"
            onClick={handleLogout}
          >
            Logout
          </span>

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

const data = [
  {
    label: "Dashboard",
    href: "/support-center",
  },
  {
    label: "Open Tickets",
    href: "/support-center/open-tickets",
  },
  {
    label: "Close Tickets",
    href: "/support-center/close-tickets",
  },
  {
    label: "All Customer",
    href: "/support-center/customer",
  },
  {
    label: "Settings",
    href: "/support-center/settings",
  },
];
