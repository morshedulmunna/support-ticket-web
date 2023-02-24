import Link from "next/link";
import React from "react";
import { BiSupport } from "react-icons/bi";

const Header = () => {
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

        <Link
          className="rounded bg-blue-500 px-6 py-2 font-medium text-white  duration-300 hover:bg-blue-400  "
          href={"/login"}
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Header;
