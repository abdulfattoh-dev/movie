import { memo } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="bg-black dark:bg-white">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default memo(MainLayout);
