const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 5 },
    { id: 2, message: "It's my first post", likesCount: 24 },
    { id: 3, message: "Wow", likesCount: 18 },
  ],
  newPostText: "",
  profile: null
}

const profileReduce = (state = initialState, action) => {
  switch(action.type){
    case ADD_POST: {
      return {
        ...state,
        posts: [...state.posts, {id: 5, message: state.newPostText, likesCount: 0,}],
        newPostText: ""
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      };
    }
    default: 
      return state;
  }
};

export const addPostCreator = () => ({ type: ADD_POST });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

export const updateNewPostTextCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default profileReduce;