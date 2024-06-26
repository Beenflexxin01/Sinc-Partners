import { Outlet } from "react-router-dom";
import MainNav from "./MainNav";

function AppLayout() {
  return (
    <div>
      <header>
        <MainNav />
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
