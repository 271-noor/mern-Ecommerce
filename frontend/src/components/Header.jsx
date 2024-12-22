import React from "react";
import Logo from "./Logo";
import { GrSearch } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="h-16 shadow-md bg-white">
      <div className=" h-full container mx-auto flex items-center px-4 justify-between">
        <div className="">
         <Link to={"/"}>
         <Logo w={80} h={50} />
         </Link>
        </div>

        <div className="hidden lg:flex items-center w-full justify-between max-w-sm border 
            rounded-full focus-within:shadow pl-2">
          <input
            type="text"
            placeholder="search product here..."
            className="w-full
              outline-none "
          />
          <div className="text-lg min-w-[50px] h-8 bg-rose-600 flex items-center justify-center rounded-r-full text-white">
            <GrSearch />
          </div>
        </div>

        <div className="flex items-center gap-7">
          <div className="text-3xl cursor-pointer ">
              <FaRegCircleUser />
          </div>

            <div className="text-2xl relative">
           <span className=""> <FaShoppingCart /></span>

              <div className="bg-rose-600 text-white w-5 h-5 rounded-full
                 absolute -top-2 -right-4 p-1 flex items-center justify-center">
                <p className="text-sm">0</p>
              </div>
            </div>

            <div className="">
              <Link to={"/login"} className=" px-3 py-1 text-white bg-rose-600 rounded-full hover:bg-rose-700 ">Login</Link>
            </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
