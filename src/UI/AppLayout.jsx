import { Outlet } from "react-router-dom";
import MainNav from "./MainNav";
import { Analytics } from "@vercel/analytics/react";

function AppLayout() {
  return (
    <div>
      <header>
        <MainNav />
      </header>

      <main>
        <Outlet />
        <Analytics />
      </main>
    </div>
  );
}

export default AppLayout;
