import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <nav className=" containers bg-blue-50  underline">
      <div className="flex items-center justify-between">
        <ul className="containers mx-auto flex  items-center  justify-start space-x-6   py-4">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <Link href={"/dashboard"}>Dashboard</Link>
          <li></li>
        </ul>

        <Link href={"/login"}>Login</Link>
      </div>
    </nav>
  );
};

export default Header;
