import avaPhoto from "../img/ava_2.jpg";

const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";



let initialState = {
  dialogs: [
    {
      id: 1,
      name: "Vlad",
      image: avaPhoto,
    },
    {
      id: 2,
      name: "Oksana",
      image: avaPhoto,
    },
    {
      id: 3,
      name: "Nastya",
      image: avaPhoto,
    },
    {
      id: 4,
      name: "Ira",
      image: avaPhoto,
    },
  ],
  messages: [
    {
      id: 1,
      message: "Hi",
      image: avaPhoto,
    },
    {
      id: 2,
      message: "How are you?",
      image: avaPhoto,
    },
    {
      id: 3,
      message: "Cool",
      image: avaPhoto,
    },
    {
      id: 4,
      message: "Wow",
      image: avaPhoto,
    },
  ],
  newMessageText: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      return {
        ...state,
        messages: [
          ...state.messages,
          { id: 5, message: state.newMessageText, image: {avaPhoto} },
        ],
        newMessageText: "",
      };
    }
    case UPDATE_NEW_MESSAGE_TEXT: {
      return {
        ...state,
        newMessageText: action.newMess,
      };
    }
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
