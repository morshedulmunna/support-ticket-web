import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <>
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

        <Link href={"/support-center/create-ticket"}>
          <button className=" mt-6 w-full rounded-md bg-blue-500 py-2  text-white hover:bg-blue-400 ">
            Create an Ticket
          </button>
        </Link>
      </div>
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
    label: "Settings",
    href: "/support-center/settings",
  },
  {
    label: "Logout",
    href: "/logout",
  },
];
