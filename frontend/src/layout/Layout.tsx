import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import { Outlet } from "@tanstack/react-router";
import type { FC } from "react";

const Layout: FC = () => {
  return (
    <div className="min-h-screen bg-[--color-bg] text-ink flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
