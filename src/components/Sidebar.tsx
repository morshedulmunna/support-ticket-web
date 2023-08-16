"use client";

import { openCategoryForm } from "@/redux/features/category/categorySlice";
import { RootState } from "@/redux/store";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

const Sidebar = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  const path = usePathname();
  const dispatch = useDispatch();
  return (
    <>
      <div className="rounded bg-orange-50 px-3 py-6">
        <Link
          className={`block w-full rounded-md py-2 px-4 hover:bg-orange-100 ${
            path === "/support-center" && "bg-orange-100"
          } `}
          href={"/support-center"}
        >
          {user?.roll === "admin" ? "Dashboard" : "Ticket History"}
        </Link>
        <Link
          className={`block w-full rounded-md py-2 px-4 hover:bg-orange-100 ${
            path === "/support-center/open-tickets" && "bg-orange-100"
          } `}
          href={"/support-center/open-tickets"}
        >
          Open Tickets
        </Link>
        <Link
          className={`block w-full rounded-md py-2 px-4 hover:bg-orange-100 ${
            path === "/support-center/close-tickets" && "bg-orange-100"
          } `}
          href={"/support-center/close-tickets"}
        >
          Close Tickets
        </Link>

        {user?.roll === "admin" && (
          <Link
            className={`block w-full rounded-md py-2 px-4 hover:bg-orange-100 ${
              path === "/support-center/customer" && "bg-orange-100"
            } `}
            href={"/support-center/customer"}
          >
            Customers
          </Link>
        )}

        {user?.roll === "assistance" && (
          <>
            <Link
              onClick={() => dispatch(openCategoryForm(false))}
              className={`block w-full rounded-md py-2 px-4 hover:bg-orange-100 ${
                path === "/support-center/category" && "bg-orange-100"
              } `}
              href={"/support-center/category"}
            >
              Category
            </Link>
          </>
        )}

        <Link
          className={`block w-full rounded-md py-2 px-4 hover:bg-orange-100 ${
            path === "/support-center/settings" && "bg-orange-100"
          } `}
          href={"/support-center/settings"}
        >
          Settings
        </Link>

        {user?.roll === "customer" && (
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
