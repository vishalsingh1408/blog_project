import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../utility/Button";


const PostDetail = () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  let { id } = useParams()
  let [data, setdata] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${backendUrl}/all_posts`);
      const jsonResponse = await response.json();
      setdata(jsonResponse.data)
    }
    fetchData();
  }, [])
  return (
    <>
      {data.length > 0 &&
        <div className="  px-26 bg-[#fff2f7] flex justify-center   ">
          <div className="  bg-white rounded-2xl  w-[600px] p-10  my-12 flex flex-col gap-4">
            <div className="flex justify-between mt-10">
              <div className="flex">
                <img src={data[id].image2} alt="" className="w-[50px] rounded-[50%]" />
                <div>
                  <h2 className="text-[#442940] font-bold">BY:{data[id].name}</h2>
                  <p className="text-[#442940]"> {data[id].month}</p>
                </div>
              </div>
              <div>
                <div className="flex gap-6">

                  <Button btn={"Edit"} className="bg-blue-500 text-white hover:bg-blue-700" />

                  <Button btn={"Delete"} className={"bg-red-500 text-white hover:bg-red-700"} />
                </div>

              </div>
            </div>
            <h5 className="text-[#442940] font-bold mt-2 text-3xl">{data[id].title}</h5>
            <div className="">
              <img src={data[id].image1} alt="" className="rounded-2xl h-[250px] w-full " />
            </div>
            <div>

              <p className="text-[#442940]">
                {data[id].desc}
              </p>
            </div>

          </div>
        </div>
      } 
    </>
  );
};

export default PostDetail;
