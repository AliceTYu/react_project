const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const AVA_1 =
  "https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_42_28061027.jpg";

const dialogsReducer = (state, action) => {
  switch(action.type){
    case ADD_MESSAGE:
      let newMessage = {
        id: 5,
        message: state.newMessageText,
        image: AVA_1,
      };
      state.messages.push(newMessage);
      state.newMessageText = "";
      return state;
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newMess;
      return state;
    default: 
      return state;
  }
};

export const addMessageCreator = () => ({ type: ADD_MESSAGE });

export const updateNewMessageTextCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newMess: text,
});

export default dialogsReducer;