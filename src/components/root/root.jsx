import { Outlet } from "react-router-dom";
import Navbar from "../navbar/nav";
import Curosal from "../curosal/curosal";
import Home from "../home/home";
import Explore from "../explore/export";
import Login from "../login/login";
import Footer from "../footer/footer";



const Root = () => {
  return (
    <>
      <Navbar />
      {/* <Curosal/>
      <Home/> */}
      <Outlet />
      
    </>
  );
};

export default Root;
