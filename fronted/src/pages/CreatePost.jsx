import React from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
const CreatePost = () => {
  return (
    <>
      <div className="bg-[#fff2f7] px-26">
        <div className="flex flex-col items-center justify-center py-6  ">
          <div className="">
            <h1 className="text-[#3b1c32] font-bold text-2xl  ">Create Post</h1>
            <p className="bg-[#e13f3f] mt-4 p-1">Error</p>
            <form action="" className="flex flex-col gap-4 w-120 mt-4">
              <input type="text" placeholder="Tital" className="bg-white p-1" />

              <select className="bg-white p-1 rounded border ">
                <option value="">Entertainment</option>
                <option value="Technology">Technology</option>
                <option value="Business">Business</option>
                <option value="Education">Education</option>
                <option value="Entertainment">Entertainment</option>
              </select>
              <ReactQuill className="h-35  pb-12 bg-white" />
              <input type="file" accept="png ,jpg ,jpeg" className="bg-gray-200 p-1 rounded border w-54 " />
              <button type="submit" className=" bg-[#6f6af8] text-white rounded-br-2xl rounded-tl-2xl px-4 py-1 w-30">
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
