import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from './Profile.module.css';

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src="https://i.pinimg.com/originals/6c/76/b7/6c76b70ad85d76f1bfcf4eeabd34b4fa.jpg" />
      </div>
      <div>
        Ava + description
        {/* <img src="https://c4.wallpaperflare.com/wallpaper/442/671/649/anime-original-girl-starry-sky-hd-wallpaper-preview.jpg" /> */}
      </div>
      <MyPosts/>
    </div>
  );
};

export default Profile;
