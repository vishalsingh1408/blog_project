import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>

      <header className=" bg-[#fff2f7] p-4 flex justify-between px-26  sticky top-0 z-10 shadow-2xl">
        <div className="font-bold ">
          <span className="bg-[#9d3747] text-white px-2 py-1 rounded ">
            B
          </span>
          <Link to="/">
          <span className="ml-2 text-2xl">blogefoster</span>
          </Link>
        </div>
        <nav className="space-x-8 md:flex hidden list-none  ">
         <Link to="/profile/:id"> <li className="text-[#ac7d9e]">Aman</li></Link>
         <Link to="/create"> <li className="text-[#ac7d9e]">Create Post</li></Link>
         <Link to="/authors"> <li className="text-[#ac7d9e]">Authors</li></Link>
         <Link to='/login'><li className="text-[#ac7d9e]">Login</li></Link>
         <Link to='/logout'><li className="text-[#ac7d9e]">Logout</li></Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
