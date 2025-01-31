import React from "react";
import { Link } from "react-router-dom";
import Button from "../utility/Button";


const Login = () => {
  return (
    <>
      <div className=" bg-[#fff2f7] flex flex-col items-center justify-center  min-h-screen  gap-4">
        
        <h1 className="text-[#3b1c32] font-bold text-2xl ">Login</h1>
        <div className="">
        <p className="bg-[#e13f3f] mt-4 p-2 mb-3">Error</p>
          <form action="" className="flex flex-col gap-4 w-120">
            <input type="email" placeholder="Email" className="bg-white p-2" />

            <input type="password" placeholder="Password" className=" bg-white p-2" />
          </form>
        </div>
        <Button btn={"Login"} className={"bg-[#6f6af8] text-white rounded-br-2xl rounded-tl-2xl px-4 py-1"}/>
       
        <p>
          don't have an account? <span className="text-blue-500 cursor-pointer">
          <Link to={"/register"}> register</Link> </span>
        </p>
     
      </div>
    </>
  );
};

export default Login;
