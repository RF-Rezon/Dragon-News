import React from "react";
import { FaBackward } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import pic1 from "../../assets/1.png";
import pic2 from "../../assets/2.png";
import pic3 from "../../assets/3.png";

const News = () => {
  const news = useLoaderData();
  const { _id, title, image_url, details, category_id} = news;
  return (
    <div className="max-w-7xl">
    <div className="my-20">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body ">
          <h2 className="card-title font-bold text-xl my-4 mb-6 text-center mx-auto">{title}</h2>
          <p className="text-base font-semibold text-gray-800 my-3 text-center mx-auto">{details}</p>
        </div>
        <figure className="mb-10">
          <img src={image_url} />
        </figure>
      </div>
      <Link to={`/categories/${category_id}`}><button className="btn bg-gray-800 text-white px-5 py-3 m-10"><div className="mr-3"><FaBackward/></div>Back</button></Link>
    </div>
    <div className="p-6 m-4 md:flex flex-none gap-x-0 md:gap-x-6 space-y-6 md:space-y-0">
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
  );
};

export default News;
