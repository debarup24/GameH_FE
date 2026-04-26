import Header from "@/components/common/Header";
import Sidebar from "@/components/common/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full min-h-screen bg-[#001208] overflow-x-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 ">
        <Header />

        <main className="p-0">{children}</main>
      </div>
    </div>
  );
}
