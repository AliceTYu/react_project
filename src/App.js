// import logo from "./logo.svg";
import "./App.css";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Set from "./components/Set/Set";
import Friend from "./components/Friends/Friend";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrappet-content">
        <Routes>
          <Route path="/profile" element={<Profile store={props.store} />} />
          <Route
            path="/dialogs/*"
            element={<DialogsContainer store={props.store} />}
          />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Set />} />
          <Route path="/friend" element={<Friend />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
