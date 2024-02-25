import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Leftnav from "../SideNav/Leftnav";
import Rightnav from "../SideNav/Rightnav";

const Main = () => {
  return (
    <div className="max-w-full mx-auto">
      <Header />
      <div className="flex flex-col md:flex-row items-start justify-center mx-24">
        <div className="basis-[30%] mx-auto">
          <Leftnav />
        </div>
        <div className="flex-1">
          <Outlet />
        </div>
        <div className="basis-[30%] mx-auto">
          <Rightnav />
        </div>
      </div>
    </div>
  );
};

export default Main;
