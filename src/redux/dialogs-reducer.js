const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const AVA_1 =
  "https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_42_28061027.jpg";
  const AVA_2 =
  "https://s3.amazonaws.com/sitebuilderreport-assets/stock_photos/files/000/002/816/small/cats-eye-closeup_373x_2x.jpg?1519320632";
const AVA_3 =
  "https://s3.amazonaws.com/sitebuilderreport-assets/stock_photos/files/000/040/781/small/cathedral_373x_2x.jpg?1513194155";
const AVA_4 =
  "https://s3.amazonaws.com/sitebuilderreport-assets/stock_photos/files/000/002/243/small/catching-time-hourglass_373x_2x.jpg?1518888667";
const AVA_5 =
  "https://s3.amazonaws.com/sitebuilderreport-assets/stock_photos/files/000/049/237/small/siamese-cat-laying-in-white-bedding_373x_2x.progressive.jpg?1548264708";

let initialState = {
  dialogs: [
    {
      id: 1,
      name: "Vlad",
      image: AVA_2,
    },
    {
      id: 2,
      name: "Oksana",
      image: AVA_3,
    },
    {
      id: 3,
      name: "Nastya",
      image: AVA_4,
    },
    {
      id: 4,
      name: "Ira",
      image: AVA_5,
    },
  ],
  messages: [
    {
      id: 1,
      message: "Hi",
      image:AVA_2,
    },
    {
      id: 2,
      message: "How are you?",
      image:AVA_2,
    },
    {
      id: 3,
      message: "Cool",
      image:AVA_2,
    },
    {
      id: 4,
      message: "Wow",
      image:AVA_2,
    },
  ],
  newMessageText: "",
}

const dialogsReducer = (state = initialState, action) => {
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