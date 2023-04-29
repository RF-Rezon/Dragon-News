import React from "react";
import pic1 from "../../assets/qZone1.png";
import pic2 from "../../assets/qZone2.png";
import pic3 from "../../assets/qZone3.png";

const QZone = () => {
  return (
    <div>
      <div className="p-3 m-4 my-5 text-center bg-gray-200 rounded-md">
        <p className="p-3 text-lg font-medium text-gray-800">Q Zone</p>
        <div className="space-y-5">
            <img src={pic1} />
            <img src={pic2} />
            <img className="pb-5" src={pic3} />
        </div>
      </div>
    </div>
  );
};

export default QZone;
