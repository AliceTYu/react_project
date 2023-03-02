import React from "react";
import { NavLink } from "react-router-dom";
import { addMessageCreator, updateNewMessageTextCreator } from "../../redux/dialogs-reducer";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let state = props.store.getState().dialogsPage;
  
  let dialogsElements = state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} image={d.image} />
  ));

  let messagesElements = state.messages.map((m) => (
    <Message message={m.message} image={m.image} />
  ));


  let newMessageText=state.newMessageText;

  // let newSend = React.createRef();

  let addMessage = () => {
    props.store.dispatch(addMessageCreator());
  };

  let onMessageChange = (e) => {
    let text = e.target.value;
    props.store.dispatch(updateNewMessageTextCreator(text))

    // let text = newSend.current.value;
    // props.dispatch(updateNewMessageTextCreator(text));
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
              // ref={newSend}
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
