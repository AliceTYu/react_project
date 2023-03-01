import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div className={s.fon}>
        <img src="https://s3.amazonaws.com/sitebuilderreport-assets/stock_photos/files/000/039/995/small/book-pages-as-a-heart_373x_2x.jpg?1513133821" />
      </div>
      <div className={s.descriptionBlock}>
        Ava + description
        {/* <img src="https://c4.wallpaperflare.com/wallpaper/442/671/649/anime-original-girl-starry-sky-hd-wallpaper-preview.jpg" /> */}
      </div>
    </div>
  );
};

export default ProfileInfo;
