// import logo from "./logo.svg";
import "./App.css";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Set from "./components/Set/Set";
import Friend from "./components/Friends/Friend";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import FindUsersContainer from "./components/FindUsers/FindUsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

function App(props) {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar />
      <div className="app-wrappet-content">
        <Routes>
          <Route path="/profile/*" element={<ProfileContainer />} >
          <Route path=":userId?" element={<ProfileContainer />} /> </Route>
          <Route path="/dialogs/*" element={<DialogsContainer />} />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Set />} />
          <Route path="/friend" element={<Friend />} />
          <Route path="/users" element={<FindUsersContainer />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
