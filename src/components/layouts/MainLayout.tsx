import { Outlet } from "react-router-dom";
import { StickyNavbar } from "../ui/Navbar";

export const MainLayout = () => {
  return (
    <>
      <StickyNavbar />
      <div>
        <Outlet />
      </div>
    </>
  );
};
