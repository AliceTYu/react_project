import React from "react";
import {
  addMessageCreator,
  updateNewMessageTextCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "./../../StoreContext";

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState().dialogsPage;

        let addMessage = () => {
          store.dispatch(addMessageCreator());
        };

        let onMessageChange = (text) => {
          store.dispatch(updateNewMessageTextCreator(text));
        };
        return (
          <Dialogs
            addMessage={addMessage}
            onMessageChange={onMessageChange}
            dialogsPage={state}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
