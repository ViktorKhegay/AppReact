import React from "react";
import s from "../MyPosts.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img
        className={s.avatar}
        src="https://semantic-ui.com/images/avatar2/large/matthew.png"
      ></img>
      {props.message}
      <div>
        <span>like {props.like}</span>
      </div>
    </div>
  );
};

export default Post;
