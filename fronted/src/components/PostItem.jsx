import React from "react";
import Button from "../utility/Button";

const PostItem = ({id}) => { 
  return (
    <>
      <div className=" p-4 my-10 bg-white rounded-2xl hover:scale-105 duration-500">
        <div className="">
          <img src={id.image1} alt="" className="rounded-2xl h-[250px] w-full " />
        </div>
        <div>
          <h5 className="text-[#442940] font-bold mt-2">{id.title}</h5>
          <p className="text-[#442940]">
            {id.desc} 
          </p>
        </div>
        <div>
          <div className="flex justify-between mt-10">
            <div className="flex">
              <img src={id.image2} alt="" className=" bg-amber-400 w-14 h-14  rounded-full" />
              <div>
                <h2 className="text-[#442940] font-bold">BY:{id.name}</h2>
                <p className="text-[#442940]"> {id.month}</p>
              </div>
            </div>
            <div>
              <Button btn={"Uncategorized"} className={"bg-[#442940] text-white rounded-br-2xl rounded-tl-2xl p-1"}/>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostItem;
