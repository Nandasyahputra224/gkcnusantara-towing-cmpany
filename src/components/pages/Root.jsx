import { Outlet } from "react-router-dom";
import Navbar from "../parts/Navbar";
import Footer from "../parts/Footer";

const Root = () => {
  return (
    <div className="min-h-screen">
      <div className="fixed w-full shadow-md">
        <Navbar />
      </div>
      {<Outlet />}
      {/* <Footer /> */}
    </div>
  );
};

export default Root;
