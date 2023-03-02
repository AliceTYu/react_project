const ADD_POST = "ADD-POST";
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

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
          image:
            "https://s3.amazonaws.com/sitebuilderreport-assets/stock_photos/files/000/002/816/small/cats-eye-closeup_373x_2x.jpg?1519320632",
        },
        {
          id: 2,
          name: "Oksana",
          image:
            "https://s3.amazonaws.com/sitebuilderreport-assets/stock_photos/files/000/040/781/small/cathedral_373x_2x.jpg?1513194155",
        },
        {
          id: 3,
          name: "Nastya",
          image:
            "https://s3.amazonaws.com/sitebuilderreport-assets/stock_photos/files/000/002/243/small/catching-time-hourglass_373x_2x.jpg?1518888667",
        },
        {
          id: 4,
          name: "Ira",
          image:
            "https://s3.amazonaws.com/sitebuilderreport-assets/stock_photos/files/000/049/237/small/siamese-cat-laying-in-white-bedding_373x_2x.progressive.jpg?1548264708",
        },
      ],
      messages: [
        {
          id: 1,
          message: "Hi",
          image:
            "https://s3.amazonaws.com/sitebuilderreport-assets/stock_photos/files/000/002/816/small/cats-eye-closeup_373x_2x.jpg?1519320632",
        },
        {
          id: 2,
          message: "How are you?",
          image:
            "https://s3.amazonaws.com/sitebuilderreport-assets/stock_photos/files/000/002/816/small/cats-eye-closeup_373x_2x.jpg?1519320632",
        },
        {
          id: 3,
          message: "Cool",
          image:
            "https://s3.amazonaws.com/sitebuilderreport-assets/stock_photos/files/000/002/816/small/cats-eye-closeup_373x_2x.jpg?1519320632",
        },
        {
          id: 4,
          message: "Wow",
          image:
            "https://s3.amazonaws.com/sitebuilderreport-assets/stock_photos/files/000/002/816/small/cats-eye-closeup_373x_2x.jpg?1519320632",
        },
        {
          id: 5,
          message: "Wow",
          image:
            "https://s3.amazonaws.com/sitebuilderreport-assets/stock_photos/files/000/002/816/small/cats-eye-closeup_373x_2x.jpg?1519320632",
        },
      ],
      newMessageText: "",
    },
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
  // addPost() {
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
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === ADD_MESSAGE) {
      let newMessage = {
        id: "6",
        message: this._state.dialogsPage.newMessageText,
        image:
          "https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_42_28061027.jpg",
      };
      this._state.dialogsPage.messages.push(newMessage);
      this._state.dialogsPage.newMessageText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.dialogsPage.newMessageText = action.newMess;
      this._callSubscriber(this._state);
    }
  },
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });

export const updateNewMessageTextActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newMess: text,
});

window.store = store;

export default store;
