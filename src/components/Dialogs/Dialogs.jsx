import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};
const Message = (props) => {
  return <div className={s.dialog}>{props.message}</div>;
};

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name="Viktor" id="1" />

        <DialogItem name="User 2" id="2" />

        <DialogItem name="User 3" id="3" />
        <DialogItem name="User 4" id="4" />
      </div>
      <div className={s.messages}>
        <Message message="Hi" />
        <Message message="I like programming, but my wife likes to play game..." />
        <Message message="how are you?" />
      </div>
    </div>
  );
};

export default Dialogs;
