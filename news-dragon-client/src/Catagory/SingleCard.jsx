import moment from "moment";
import React from "react";
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const SingleCard = ({ cd }) => {
  const { _id, rating, total_view, title, author, image_url, details } = cd;
  return (
    <div className="">
      <div className="card w-96 glass my-5 p-3">
        <div className="navbar bg-base-100">
          <div className="dropdown dropdown-end m-2">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={author.img} />
              </div>
            </label>
          </div>
          <div className="flex-1">
            <Link className="btn btn-ghost normal-case text-xl">{author.name}</Link>
            <p className="text-sm font-semibold text-gray-800 my-3">
              {moment(author?.published_date).format("YY-MMM-D")}
            </p>
          </div>

          <div className="gap-x-4">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <FaRegBookmark />
                </div>
              </label>
            </div>
          </div>
          <div>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <FaShareAlt />
                </div>
              </label>
            </div>
          </div>
        </div>
        <h2 className="card-title my-4 mb-6">{title}</h2>
        <figure>
          <img className="rounded" src={image_url} />
        </figure>
        <div className="card-body">
          {details.length < 250 ? (
            <p className="text-base font-semibold text-gray-800 my-3">{details}</p>
          ) : (
            <p>
              {details.slice(0, 250)} ...{" "}
              <p className="text-base font-semibold text-orange-500 my-3">
                <Link to={`/news/${_id}`}>Read More</Link>
              </p>
            </p>
          )}
          <hr className="mb-4" />
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-between gap-x-3">
              <div>
                <Rating
                  readonly
                  placeholderRating={rating.number}
                  emptySymbol={<FaRegStar />}
                  placeholderSymbol={<FaStar />}
                  fullSymbol={<FaStar />}
                />
              </div>
              <p>{rating.number}</p>
            </div>
            <div className="flex items-center justify-between gap-x-3">
              <FaEye />
              {total_view}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
