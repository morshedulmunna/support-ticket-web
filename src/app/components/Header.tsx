"use client";

import { jwtToken } from "@/utils/jwtToken";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import { BiSupport } from "react-icons/bi";
import { toast } from "react-toastify";

const Header = () => {
  const token = jwtToken();

  const router = useRouter();

  return (
    <nav className=" containers sticky top-0  mt-4 bg-blue-50 duration-300 ease-in-out">
      <div className="flex items-center justify-between">
        <ul className="containers mx-auto flex  items-center  justify-start space-x-6   py-4">
          <li className="duration-300 hover:text-blue-500">
            <Link href={"/"}>Home</Link>
          </li>
          <Link
            className="flex items-center space-x-1 duration-300 hover:text-blue-500"
            href={"/support-center"}
          >
            <BiSupport />
            <span>Talk to Support</span>
          </Link>
        </ul>

        {token ? (
          <Link
            className="rounded bg-orange-500 px-6 py-2 font-medium text-white  duration-300 hover:bg-orange-400  "
            href={"/login"}
            onClick={() => {
              localStorage.removeItem("accessToken");
              toast.info("See you soon");
              router.push("/login");
            }}
          >
            Logout
          </Link>
        ) : (
          <Link
            className="rounded bg-blue-500 px-6 py-2 font-medium text-white  duration-300 hover:bg-blue-400  "
            href={"/login"}
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
