import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} image={d.image} />
  ));

  let messagesElements = state.messages.map((m) => (
    <Message message={m.message} image={m.image} />
  ));

  let newMessageText = state.newMessageText;

  let addMessage = () => {
    props.addMessage();
  };

  let onMessageChange = (e) => {
    let text = e.target.value;
    props.onMessageChange(text);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        {messagesElements}
        <div className={s.sendMessage}>
          <div>
            <textarea
              placeholder="Введите сообщение"
              onChange={onMessageChange}
              value={newMessageText}
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
