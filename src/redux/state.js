import { rerenderEntireTree } from "../render";

let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi, how are you?", likesCount: 5 },
      { id: 2, message: "It's my first post", likesCount: 24 },
      { id: 3, message: "Wow", likesCount: 18 },
    ],
  },
  dialogsPage: {
    dialogs: [
      { id: 1, name: "Vlad", image: 'https://s3.amazonaws.com/sitebuilderreport-assets/stock_photos/files/000/002/816/small/cats-eye-closeup_373x_2x.jpg?1519320632' },
      { id: 2, name: "Oksana", image:'https://s3.amazonaws.com/sitebuilderreport-assets/stock_photos/files/000/040/781/small/cathedral_373x_2x.jpg?1513194155'},
      { id: 3, name: "Nastya", image:'https://s3.amazonaws.com/sitebuilderreport-assets/stock_photos/files/000/002/243/small/catching-time-hourglass_373x_2x.jpg?1518888667'},
      { id: 4, name: "Ira", image:'https://s3.amazonaws.com/sitebuilderreport-assets/stock_photos/files/000/049/237/small/siamese-cat-laying-in-white-bedding_373x_2x.progressive.jpg?1548264708' },
    ],
    messages: [
      { id: 1, message: "Hi", image: 'https://s3.amazonaws.com/sitebuilderreport-assets/stock_photos/files/000/002/816/small/cats-eye-closeup_373x_2x.jpg?1519320632'},
      { id: 2, message: "How are you?", image: 'https://s3.amazonaws.com/sitebuilderreport-assets/stock_photos/files/000/002/816/small/cats-eye-closeup_373x_2x.jpg?1519320632'},
      { id: 3, message: "Cool", image: 'https://s3.amazonaws.com/sitebuilderreport-assets/stock_photos/files/000/002/816/small/cats-eye-closeup_373x_2x.jpg?1519320632'},
      { id: 4, message: "Wow", image: 'https://s3.amazonaws.com/sitebuilderreport-assets/stock_photos/files/000/002/816/small/cats-eye-closeup_373x_2x.jpg?1519320632'},
      { id: 4, message: "Wow", image: 'https://s3.amazonaws.com/sitebuilderreport-assets/stock_photos/files/000/002/816/small/cats-eye-closeup_373x_2x.jpg?1519320632'},
    ],
  },
};

export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: postMessage,
    likesCount: 0
  }
  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state);
};

export default state;