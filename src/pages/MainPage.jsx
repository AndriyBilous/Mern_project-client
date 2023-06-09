import React, { useEffect } from "react";
import { PostItem } from "../components/PostItem";
import { useDispatch, useSelector } from "react-redux";
import { PopularPosts } from "../components/PopularPosts";
import { getAllPosts } from "../redux/features/post/postSlice";

export const MainPage = () => {
  const dispatch = useDispatch();
  const { posts, PopularPosts } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch, posts]);

  if (!posts.length) {
    return (
      <div className="text-xl text-center text-white py-10">
        There are no posts yet!
      </div>
    );
  }

  return (
    <div className="max-w-[900px] ms-auto py-10">
      <div className="flex justify-between gap-8">
        <div className="flex flex-col gap-10 basis-4/5">
          {posts?.map((post, index) => (
            <PostItem key={index} post={post} />
          ))}
        </div>
        <div className="basis-1/5">
          <div className="text-xs uppercase text-white">Popular</div>

          {PopularPosts?.map((post, index) => (
            <PopularPosts key={index} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};
