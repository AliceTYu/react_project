const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 5 },
    { id: 2, message: "It's my first post", likesCount: 24 },
    { id: 3, message: "Wow", likesCount: 18 },
  ],
  newPostText: "",
}

const profileReduce = (state = initialState, action) => {
  switch(action.type){
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };
      state.posts.push(newPost);
      state.newPostText = "";
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default: 
      return state;
  }
};

export const addPostCreator = () => ({ type: ADD_POST });

export const updateNewPostTextCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default profileReduce;