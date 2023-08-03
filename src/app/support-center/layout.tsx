"use client";

import Loading from "@/components/Loading";
import Sidebar from "@/components/Sidebar";
import { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

type Props = {
  children: any;
};

export default function DashboardLayout({ children }: Props) {
  const route = useRouter();
  const user = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (!user.accessToken) {
      route.push("/login");
    }
  }, [user.accessToken, route]);

  if (!user.accessToken) {
    return <Loading />;
  }

  return (
    <section className="containers grid grid-cols-12 ">
      <aside className=" md:mt-12 col-span-12 md:col-span-3">
        <Sidebar />
        <p className="ml-5 py-2 font-semibold">
          Account Roll:
          <span className="capitalize text-orange-500"> {user.user?.roll}</span>
        </p>
      </aside>
      <main className=" col-span-12 md:col-span-9 mt-6 md:mt-12 mx-4 h-screen">
        {children}
      </main>
    </section>
  );
}
