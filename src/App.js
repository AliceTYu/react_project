// import logo from "./logo.svg";
import "./App.css";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, Routes } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Set from "./components/Set/Set";

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrappet-content">
        <Routes>
          <Route
            path="/profile"
            element={
              <Profile
                profilePage={props.state.profilePage}
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}
              />
            }
          />
          <Route
            path="/dialogs/*"
            element={
              <Dialogs
                state={props.state.dialogsPage}
                newMessageText={props.state.dialogsPage.newMessageText}
                addMessage={props.addMessage}
                updateNewMessageText={props.updateNewMessageText}
              />
            }
          />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Set />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
