import React from "react";
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} image={d.image} />
  ));

  let messagesElements = props.state.messages.map((m) => (
    <Message message={m.message} image={m.image} />
  ));

  let newSend = React.createRef();

  let addMessage = () => {
    props.addMessage();
  };

  let onMessageChange = () => {
    let text = newSend.current.value;
    props.updateNewMessageText(text);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        {messagesElements}
        <div className={s.sendMessage}>
          <div>
            <textarea
              ref={newSend}
              onChange={onMessageChange}
              value={props.newMessageText}
            />
          </div>
          <div className={s.button_send}>
            <button onClick={addMessage}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
