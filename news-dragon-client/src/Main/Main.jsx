import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import Leftnav from "../SideNav/Leftnav";
import Rightnav from "../SideNav/Rightnav";

const Main = () => {
  return (
    <div className="max-w-full md:max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center">
        <Header />
        <div className="container flex flex-col md:flex-row  items-start justify-between">
          <div className="basis-1/4 mx-auto">
            <Leftnav />
          </div>
          <div className="mx-auto">
            <Outlet />
          </div>
          <div className="basis-1/4 mx-auto">
            <Rightnav />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Main;
