import moment from "moment";
import React from "react";
import logo from "../../assets/logo.png";

const HeaderFirst = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="p-5 my-5">
        <img src={logo} />
      </div>
      <p className="p-3 text-lg font-medium text-gray-600">Sangbadikota korte kono voy nai</p>
      <p className="p-3 my-3 text-lg font-semibold text-zinc-800">{moment().format("dddd, MMMM D, YYYY")}</p>
    </div>
  );
};

export default HeaderFirst;
