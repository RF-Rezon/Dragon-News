import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import QZone from "../KidsZone/Q-zone";
import SpecialCard from "../SpecialCard/SpecialCard";

const Rightnav = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="p-5 my-4">
        <p className="p-3 text-xl font-bold text-gray-800">Login With</p>
        <div className="flex space-x-6 items-center my-5">
          <FaGoogle />
          <button className="btn btn-outline text-lg font-medium text-gray-600">Google</button>
        </div>
        <div className="flex space-x-6 items-center">
          <FaGithub />
          <button className="btn btn-outline text-lg font-medium text-gray-600">GitHub</button>
        </div>
      </div>
      <div className="p-5 mb-4">
        <p className="p-3 text-xl font-bold text-gray-800">Find Us On</p>
        <ul className="menu bg-base-100 w-56 rounded-box gap-5">
          <li>
          <button className="btn btn-outline text-lg font-medium text-gray-600">FaceBook</button>
          </li>
          <li>
          <button className="btn btn-outline text-lg font-medium text-gray-600">Twetter</button>
          </li>
          <li>
          <button className="btn btn-outline text-lg font-medium text-gray-600">Instagram</button>
          </li>
        </ul>
      </div>
      <QZone/>
      <SpecialCard/>
    </div>
  );
};

export default Rightnav;
