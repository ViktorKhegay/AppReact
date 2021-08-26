import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>add post</button>
        </div>
      </div>
      <div className={s.posts}>
        <Post message="hello world" like="2" />
        <Post message="hello mir" like="10" />
      </div>
    </div>
  );
};

export default MyPosts;
