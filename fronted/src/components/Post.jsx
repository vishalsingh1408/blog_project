import React, { useEffect, useState } from "react";
import PostItem from "./PostItem";
import { Link } from "react-router-dom";
const Post = () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
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
      <div className="flex mt-20 gap-4">
        {data.length > 0 && data.map((item, i) => (
          <Link to={`/posts/${i}`} key={i}>
            <PostItem id={item} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Post;
