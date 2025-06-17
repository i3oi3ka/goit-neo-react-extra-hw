import { Outlet } from "react-router-dom";
import AppBar from "../../components/AppBar/AppBar";
import { Toaster } from "react-hot-toast";

const HomeLayout = () => {
  return (
    <div>
      <AppBar />
      <Outlet />
      <Toaster />
    </div>
  );
};

export default HomeLayout;
