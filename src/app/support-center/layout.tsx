"use client";

import Sidebar from "@/components/Sidebar";
import { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./open-tickets/loading";

type Props = {
  children: any;
};

export default function DashboardLayout({ children }: Props) {
  const route = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth);

  if (!user.accessToken) {
    route.push("/login");
  }

  if (!user.accessToken) {
    return <Loading />;
  }

  return (
    <section className="containers grid grid-cols-12 ">
      <aside className=" md:mt-12 col-span-12 md:col-span-3">
        <Sidebar />
      </aside>
      <main className=" col-span-12 md:col-span-9 mt-6 md:mt-12 mx-4 h-screen">
        {children}
      </main>
    </section>
  );
}
