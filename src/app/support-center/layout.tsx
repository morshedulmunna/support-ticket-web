import Sidebar from "@/components/Sidebar";

type Props = {
  children: any;
};

export default function DashboardLayout({ children }: Props) {
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
