import axios from "../utils/axios";
import React, { useEffect, useState } from "react";
import { PostItem } from "../components/PostItem";

export const PostsPage = () => {
  const [posts, setPosts] = useState([]);

  const fetchMyPosts = async () => {
    try {
      const { data } = await axios.get("/posts/user/me");
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMyPosts();
  }, []);

  if (!posts) {
    return (
      <div className="w-1/2 mx-auto py-10 flex flex-col gap-10">
        There are no posts yet
      </div>
    );
  }

  return (
    <div className="w-1/2 mx-auto py-10 flex flex-col gap-10">
      {posts.length >= 0 &&
        posts.map((post, index) => {
          return <PostItem post={post} key={index} />;
        })}
    </div>
  );
};
