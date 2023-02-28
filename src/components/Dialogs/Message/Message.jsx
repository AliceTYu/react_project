import React from "react";
import s from "./Message.module.css";

const Message = (props) => {
  return (
  <div className={s.message}>
    <img src={props.image} alt="error" />
    {props.message}
  </div>);
};

export default Message;
