import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebarReducer";

const AVA_2 =
  "https://s3.amazonaws.com/sitebuilderreport-assets/stock_photos/files/000/002/816/small/cats-eye-closeup_373x_2x.jpg?1519320632";
const AVA_3 =
  "https://s3.amazonaws.com/sitebuilderreport-assets/stock_photos/files/000/040/781/small/cathedral_373x_2x.jpg?1513194155";
const AVA_4 =
  "https://s3.amazonaws.com/sitebuilderreport-assets/stock_photos/files/000/002/243/small/catching-time-hourglass_373x_2x.jpg?1518888667";
const AVA_5 =
  "https://s3.amazonaws.com/sitebuilderreport-assets/stock_photos/files/000/049/237/small/siamese-cat-laying-in-white-bedding_373x_2x.progressive.jpg?1548264708";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 5 },
        { id: 2, message: "It's my first post", likesCount: 24 },
        { id: 3, message: "Wow", likesCount: 18 },
      ],
      newPostText: "",
    },
    dialogsPage: {
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
    },
    sidebar: {}
  },
  _callSubscriber() {
    console.log("state changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer; //наблюдатель(observer) паттерн / publisher-subscriber
  },
  //   let newPost = {
  //     id: 5,
  //     message: this._state.profilePage.newPostText,
  //     likesCount: 0
  //   }
  //   this._state.profilePage.posts.push(newPost);
  //   this._state.profilePage.newPostText = '';
  //   this._callSubscriber(this._state);
  // },
  // addMessage() {
  //   let newMessage = {
  //     id: '6',
  //     message: this._state.dialogsPage.newMessageText,
  //     image: 'https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_42_28061027.jpg'
  //   }
  //   this._state.dialogsPage.messages.push(newMessage);
  //   this._state.dialogsPage.newMessageText = '';
  //   this._callSubscriber(this._state);
  // },
  // updateNewPostText(newText) {
  //   this._state.profilePage.newPostText = newText;
  //   this._callSubscriber(this._state);
  // },
  // updateNewMessageText(newMess) {
  //   this._state.dialogsPage.newMessageText = newMess;
  //   this._callSubscriber(this._state);
  // },

  dispatch(action) {
  
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);

  },
};

window.store = store;

export default store;
