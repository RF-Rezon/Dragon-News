import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import pic1 from "../../assets/1.png";
import pic2 from "../../assets/2.png";
import pic3 from "../../assets/3.png";


const Leftnav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div>
        <p className="p-3 text-lg font-bold text-gray-800">All Category</p>
        <div className="space-y-5">
          {categories.map((e) => (
            <p className="p-3 text-md font-medium text-gray-700 bg-gray-200 rounded-md" key={e.id}><Link to={`/categories/${e.id}`}>{e.name}</Link></p>
          ))}
        </div>
        <div className="p-6 m-4 space-y-7">
          <div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-center mx-auto">Happy !</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
            <figure>
              <img src={pic1} />
            </figure>
          </div>
          <div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-center mx-auto">Happy 2!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
            <figure>
              <img src={pic2} />
            </figure>
          </div>
          <div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-center mx-auto">Happy 3!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
            <figure>
              <img src={pic3} />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leftnav;
