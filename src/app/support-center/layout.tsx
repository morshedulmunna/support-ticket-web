import Sidebar from "@/components/Sidebar";

type Props = {
  children: any;
};

export default function DashboardLayout({ children }: Props) {
  return (
    <section className="containers grid grid-cols-12 ">
      <aside className="col-span-3">
        <Sidebar />
      </aside>

      <main className="col-span-9 mt-12 mx-4 h-screen">{children}</main>
    </section>
  );
}
