import "./page-layout.css";
import { Outlet } from "react-router-dom";
import AppAccount from "../components/app-account/app-account";
import AppNavigation from "../components/app-navigation/app-navigation";
import MobileMenu from "../components/mobile-menu/mobile-menu";

const PageLayout = () => {
  return (
    <div className="app">
      <AppAccount />
      <AppNavigation />
      <MobileMenu />
      <Outlet />
    </div>
  );
};

export default PageLayout;
