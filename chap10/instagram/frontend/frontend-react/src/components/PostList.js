import React, { useEffect, useState } from "react";
import Axios from "axios";
import Post from "./Post";
import { useAppContext } from "store";

const apiUrl = "http://localhost:8000/posts/";

function PostList() {
  const [postList, setPostList] = useState([]);
  const { store } = useAppContext();
  console.log(store);
  useEffect(() => {
    Axios.get(apiUrl)
      .then((response) => {
        const { data } = response;
        console.log("loaded response:", response);
        setPostList(data);
      })
      .catch((error) => {});
    console.log("mounted");
  }, []);

  return (
    <div>
      {postList.map((post) => {
        return <Post post={post} key={post.id} />;
      })}
    </div>
  );
}

export default PostList;
