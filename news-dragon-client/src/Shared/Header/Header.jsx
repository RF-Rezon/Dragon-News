import React, { useContext } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import user1 from "../../../assets/my_photo.jpg";
import { AuthContext } from "../../AuthProvider/Authprovider";
import HeaderFirst from "../../HeaderFirst/HeaderFirst";
const Header = () => {
  const {user} = useContext(AuthContext);
  return (
    <div className='flex flex-col items-center text-center'>
     <HeaderFirst/>
      <p className="p-3 my-3 text-blue-400 text-base font-semibold">
        <Marquee>
        Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) – U.S. President Joe Biden has announced nearly $3 billion in new U.S. military a ........
        WASHINGTON: President Joe Biden announced nearly $3 billion in military aid to Kyiv on Wednesday -- the biggest US package so far -- to mark Ukraine's independence day, six months after Russia invaded the country. The package aims to fortify Ukraine' .......
        President Joe Biden speaks as he attends the first virtual meeting of the I2U2 group with Israeli prime minister Yair Lapid and leaders of India and the United Arab Emirates, in Jerusalem 14 July, 2022ReutersUS ......
        </Marquee>
      </p>
      <nav className="my-6 p-6">
        <div className="navbar bg-base-100">
          <div>
            <Link to="/" className="btn btn-ghost normal-case text-xl">Home</Link>
            <Link className="btn btn-ghost normal-case text-xl">About</Link>
            <Link className="btn btn-ghost normal-case text-xl">Career</Link>
          </div>
          <div>
              <label tabIndex={0} className="btn btn-ghost">
               {user ? <p className="text-lg font-medium text-gray-500 ">{user.displayName}</p> : <Link to={"/login"} className="text-lg font-medium text-gray-500">Log In</Link>}

              </label>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  {user ? <Link><img src={user1} /></Link> : <></>}
                </div>
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
