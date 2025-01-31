import React from "react";
import Button from "../utility/Button";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const UserProfile = () => {
  return (
    <>
      <div className=" bg-[#fff2f7] flex flex-col items-center justify-center  min-h-screen  gap-4">
       <Link to={"/myposts/:id"}>
       <Button
          btn={"My Posts"}
          className={"bg-white text-[#3b1c32]  font-bold"}
        />
       </Link>

        <div className="relative">
          <span className="bg-white  h-40   rounded-full ">
            <img
              src="/virat.webp"
              className="  w-40 h-40 rounded-full object-cover "
            />
          </span>
          <label htmlFor="imageUpload" className=" absolute bottom-2 right-2 bg-[#3b1c32] text-white p-2 rounded-full  cursor-pointer ">
            <FaEdit />
          </label>
        </div>

        <div className="flex gap-4 flex-col ">
          <h1 className="text-[#3b1c32] font-bold text-2xl text-center  ">
            Vishal
          </h1>

          <form action="" className="flex flex-col gap-4 w-120">
            <input type="text" placeholder=" Name" className="bg-white p-2" />
            <input type="email" placeholder=" Email" className="bg-white p-2" />
            <input
              type="password"
              placeholder="Current Password "
              className=" bg-white p-2"
            />
            <input
              type="password"
              placeholder=" New Password"
              className=" bg-white p-2"
            />
            <input
              type="password"
              placeholder=" Confirm Password"
              className=" bg-white p-2"
            />
          </form>
          <Button
            btn={"Update details"}
            className={"bg-blue-500 text-white w-30"}
          />
        </div>
      </div>
    </>
  );
};

export default UserProfile;
