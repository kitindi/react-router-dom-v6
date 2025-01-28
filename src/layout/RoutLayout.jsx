import Navbar from "../component/Navbar";
import { Outlet } from "react-router-dom";

const RoutLayout = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default RoutLayout;
