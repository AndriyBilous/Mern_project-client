import React, { useEffect, useState } from "react";
import { PostItem } from "../components/PostItem";
import { useDispatch, useSelector } from "react-redux";
import { PopularPosts } from "../components/PopularPosts";
import { getAllPosts } from "../redux/features/post/postSlice";

export const MainPage = () => {
  const [postsData, setPostsData] = useState("");
  const dispatch = useDispatch();
  const { posts, popularPosts, loading } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  useEffect(() => {
    if (!loading) {
      setPostsData(posts);
    }
  }, [posts, postsData]);

  // useEffect(() => {
  //   if (loading) {
  //     return (
  //       <div className="text-xl text-center text-white py-10">
  //         Downloading data...
  //       </div>
  //     );
  //   }
  // }, [posts, postsData]);

  if (loading) {
    return (
      <div className="text-xl text-center text-white py-10">
        Downloading data...
      </div>
    );
  }

  if (postsData.length === 0 && loading === false) {
    return (
      <div className="text-xl text-center text-white py-10">
        There are no posts yet!
      </div>
    );
  }

  return (
    <div className="max-w-[900px] py-10" style={{ margin: "0 auto" }}>
      <div className="max-w-[900px] py-10 mx-auto">
        <div className="flex justify-between gap-8">
          <div className="flex flex-col gap-10 basis-4/5">
            {postsData.length > 0 &&
              postsData?.map((post, index) => (
                <PostItem key={index} post={post} />
              ))}
          </div>
          <div className="basis-1/5">
            <div className="text-xs uppercase text-white">Popular</div>

            {popularPosts?.map((post, index) => {
              return <PopularPosts key={index} post={post} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
